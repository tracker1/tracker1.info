---
id: f6547143-8e04-4a46-bdbf-10d47462ce6c
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: compressing-bytes-in-dotnet
slug: compressing-bytes-in-dotnet
title: Compressing Bytes In .Net
description: ''
date: 2009-08-20T10:57:00.000Z
modified: 2009-08-20T10:57:00.000Z
tags:
  - 'c#'
  - compression
categories:
  - .Net
  - Architecture
  - 'C#'
  - Databases
  - mono
---

<p>Okay, this started when I wanted to store a bit of JSON that gets rendered into the ASP.Net cache.&#xA0; Each entry would be unique to a given user, and I wanted to save a little memory, each entry would be about 8KB in size.&#xA0; I looked into this and found the System.IO.Compression namespace that is available in .Net 3.5.&#xA0; I created a small class with some helper extensions to be able to compress/decompress an array of byte, and handle to/from a native string.&#xA0; Here&apos;s what I came up with.</p>
<div><br><em>CompressionExtensions.cs</em></div>
<pre class="brush: js">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.IO.Compression;

namespace Sample
{
    public static class CompressionExtensions
    {
        const int KB = 1024;

        public static byte[] Compress(this byte[] input)
        {
            using (var ms = new MemoryStream(input.Length + 8))
            {
                ms.Write(BitConverter.GetBytes(input.Length), 0, 4); //record original length

                if (input.Length &lt; KB)
                {
                    //if less than 1KB, don&apos;t compress original
                    ms.Write(input, 0, input.Length);
                    return ms.ToArray().Take(input.Length + 4).ToArray();
                }

                //compress the original input
                using (var ds = new DeflateStream(ms, CompressionMode.Compress))
                {
                    //send the original input to the compressed stream
                    ds.Write(input, 0, input.Length);

                    //add null padding. the decompress gets wonky without it.
                    ds.Write(new byte[4], 0, 4);
                    ds.Flush();
                    ms.Flush();
                    return ms.ToArray();
                }
            }
        }

        public static byte[] Decompress(this byte[] input)
        {
            if (input == null || input.Length &lt; 4)
                throw new ApplicationException(&quot;Invalid compressed bytes, no length header.&quot;);
        
            var bitlen = BitConverter.ToInt32(input, 0);

            //if less than 1KB, return the non-compressed original
            if (bitlen &lt; KB) return input.Skip(4).ToArray();

            var buffer = new byte[bitlen];
            using (var ms = new MemoryStream(input.Length - 4))
            {
                ms.Write(input, 4, input.Length - 4);
                ms.Flush();
                ms.Seek(0, SeekOrigin.Begin);
                using (var ds = new DeflateStream(ms, CompressionMode.Decompress))
                {
                    //this always returns a -1 for the first read
                    //    subsequent reads will work properly
                    ds.ReadByte();

                    //read the input stream into the return buffer
                    if (bitlen &gt; ds.Read(buffer, 0, bitlen))
                        throw new ApplicationException(&quot;Invalid compressed bytes.&quot;);
                }
            }

            //only return the number of bytes originally saved, trim excess
            return buffer;
        }

        public static byte[] ToCompressedBytes(this string input)
        {
            return Encoding.UTF8.GetBytes(input).Compress();
        }

        public static string ToDecompressedString(this byte[] b)
        {
            return Encoding.UTF8.GetString(b.Decompress());
        }
    }
}</pre>
<p>I found that without adding some padding of at least two null bytes, the decompression of the data would sometimes give me an invalid final byte.  I also push in a 4-byte length header for a sanity check.  This also helps me to not compress anything under 1KB in size, where compression really doesn&apos;t work very well.</p>
<p>The conversion of the string to UTF8 helps more with strings that will mostly contain values within the ASCII character set.  It is worth noting that if there are mostly multibyte characters, the byte array itself could get bloated.  For my usage, I&apos;m getting an 8KB string down to around 2KB, you could extend this to support UTF8/Unicode encoding by appending a character to the end before compressing.  This may be useful if the string is &gt;2KB and more than 1/3 is multibyte characters, this would take a little more CPU time to inspect the input string in this case.</p>
<p>Your milage may vary.  Void where prohibited.  Quantities limited.  Some restrictions may apply. <small><em>Batteries not included.</em></small></p>