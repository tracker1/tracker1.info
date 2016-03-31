---
id: a66c0c15-1d92-4b57-baac-4b31000e326c
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: tsql-paged-result-sproc
slug: tsql-paged-result-sproc
title: Paged Results in T-SQL
description: How to return a paged dataset with dynamic sorting from within a stored procedure.
date: 2010-02-23T19:08:00.000Z
modified: 2010-02-23T19:08:00.000Z
tags:
  - sql
  - t-sql
  - paging
  - stored procedure
  - sproc
categories:
  - Databases
  - jQuery
  - SQL Server
  - Tables
  - T-SQL
  - Web Development
---

  <div class="text"><p>
Okay, so I wanted to return a paged result set from a Stored Procedure in Microsoft SQL Server in T-SQL.  
The results in question can be easily fed via a web service endpoint to a Silverlight, DHTML or other dynamic 
grid.  My own use is to populate a <a href="http://www.trirand.com/jqgridwiki/doku.php" test="true">jqGrid</a>.
</p>
<p>The features I need are to be able to return only the relevant results for the current page, as well as a 
count of the total rows available.  I need to be able to input the current page number, an arbitrary page 
size, as well as dynamically sort on a given column.  My real world use is a fairly complex set of joined 
tables, with several input parameters, so I am going to limit me queries to one table with the following 
format:

</p>

<pre class="brush: sql">CREATE TABLE MyList (
    [id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    [created] DATETIME NOT NULL DEFAULT GETDATE(),
    [name] NVARCHAR(100) UNIQUE NOT NULL DEFAULT &apos;&apos;,
    [description] NVARCHAR(250) UNIQUE NOT NULL DEFAULT &apos;&apos;
);</pre>

<p>
[more]From here I&apos;m going to want to do a stored procedure with the following signature:
</p>

<pre class="brush: sql">CREATE PROCEDURE [Get_MyList_Paged]
    /*Paging Inputs*/
    @Page_Size INT = 100,
    @Page_Number INT = 1,
    @Sort_Column VARCHAR(100),  /* (&apos;created&apos;,&apos;name&apos;,&apos;description&apos;) */
    @Sort_Direction VARCHAR(4), /* (&apos;ASC&apos;,&apos;DESC&apos;) */
    
    /*Paging Total For Output*/
    @Row_Count BIGINT OUT,
    
    /*Result Filters*/
    @id UNIQUEIDENTIFIER,
    @created_filter DATETIME,   /* (&apos;ne&apos;,&apos;g&apos;,&apos;ge&apos;,&apos;e&apos;,&apos;le&apos;,&apos;l&apos;) */
    @created_date DATETIME,
    @name NVARCHAR(100),
    @description NVARCHAR(500)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    /*========================================================================
    Declare local variables
    ========================================================================*/
    -- TODO: Insert local variables
    -- TODO: create a temporary space for paged result set
    
    /*========================================================================
    Normalize Paging Parameters
    ========================================================================*/
    -- TODO: Setup FirstRecord and LastRecord for results
    -- TODO: Ensure that sorting params are in the allowed fields
    
    /*========================================================================
    Normalize Filter Parameters
    ========================================================================*/
    -- TODO: make certain that the input parameters are valid entries
    
    /*========================================================================
    Prepare Results
    ========================================================================*/
    -- TODO: input the paged results into a temporary space
    
    /*========================================================================
    Return Results
    ========================================================================*/
    -- TODO: return the output params, and select the return results
END
</pre>

<p>
The signature makes it apparent that I will want to page my result set, as well as do a dynamic 
sort for the results in addition to making some filtering options available. The next step is 
to get the first and last record you will be able to return.</p>

<pre class="brush: sql">    /*========================================================================
    Declare local variables
    ========================================================================*/
    DECLARE @FirstRecord int
    DECLARE @LastRecord int
    
    ...
    
    /*========================================================================
    Normalize Paging Parameters
    ========================================================================*/
    --Fix invalid input for Page Size
    SET @Page_Size = CASE 
        WHEN @Page_Size IS NULL THEN 100
        WHEN @Page_Size &lt; 1 THEN 100
        ELSE @Page_Size
    END;

    --Fix invalid input for Page Number
    SET @Page_Number = CASE
        WHEN @Page_Number IS NULL THEN 1
        WHEN @Page_Number &lt; 1 THEN 1
        ELSE @Page_Number
    END;

    --starting record to use.
    SET @FirstRecord = ((@Page_Number - 1) * @Page_Size) + 1

    --last record to use.
    SET @LastRecord = @FirstRecord + @Page_Size - 1

</pre>

<p>
The code above will normalize for the paged results, and set an appropriate default.  
The @FirstRecord and @LastRecord are inclusive numbers to use for the current page&apos;s results.
</p>

<p>
Now that we have the paging parameters normalized, we should work on the sorting parameters.
We want to make certain that our sort column and direction are valid...
</p>

<pre class="brush: sql">    ...

    --ensure sort column is valid in the list
    SET @Sort_Column = CASE
        WHEN LOWER(@Sort_Column) IN (&apos;created&apos;,&apos;name&apos;,&apos;description&apos;)
            THEN LOWER(@Sort_Column)
        ELSE
            &apos;created&apos; --default
    END
    
    --ensure sort direction is ASC or DESC
    SET @Sort_Direction = CASE
        WHEN LEFT(UPPER(COALESCE(@Sort_Direction, &apos;&apos;)) + &apos;    &apos;, 4) = &apos;DESC&apos; 
            THEN &apos;DESC&apos; --explicit descending
        WHEN @Sort_Column = &apos;created&apos; AND LEFT(UPPER(COALESCE(@Sort_Direction,&apos;&apos;)) + &apos;   &apos;, 3) &lt;&gt; &apos;ASC&apos; THEN
            &apos;DESC&apos; --default for created date
        ELSE &apos;ASC&apos; --default otherwise
    END;
</pre>
<p>
Here I&apos;ve made certain that the @Sort_Column is set to an available sort option, otherwise it gets set to default.  
For the sort direction, I make sure to reduce the direction to allow for the use of the longer terms ASCENDING and 
DESCENDING, as well as making the default when the sort column is &quot;created&quot; to descending.  I feel that coding defensively 
is important here.
</p>

<p>
Next up comes the input filters...
</p>

<pre class="brush:sql">    /*========================================================================
    Normalize Filter Parameters
    ========================================================================*/
    --ensure that id is a valid non-default guid, or null
    SET @id = CASE @id
        WHEN &apos;00000000-0000-0000-0000-000000000000&apos; THEN null
        ELSE @id
    END
    
    --When an id is specified, only search on the id
    IF (@id IS NOT NULL)
    BEGIN
        --set all other input filters to null
        SET @created_filter = null
        SET @created_date = null
        SET @name = null
        SET @description = null
    END
    ELSE
    BEGIN
        --validate other input filters

        -- @created_date
        SET @created_date = DATEADD(dd, 0, DATEDIFF(dd, 0, @created_date))
        
        -- @created_filter
        SET @created_filter = CASE
            WHEN LOWER(@created_filter) in (&apos;ne&apos;,&apos;g&apos;,&apos;ge&apos;,&apos;e&apos;,&apos;le&apos;,&apos;l&apos;) THEN
                LOWER(@created_filter)
            ELSE
                null
        END;
        
        -- created filtering needs a date and a filter
        IF (@created_filter IS NULL OR @created_date IS NULL)
        BEGIN
            SET @created_date = null
            SET @created_filter = null
        END;
        
        
        -- @name - if it&apos;s an empty string, make it null
        SET @name = CASE 
            WHEN COALESCE(LTRIM(RTRIM(@name)), &apos;&apos;) = &apos;&apos;
                THEN null
            ELSE
                LTRIM(RTRIM(@name))
        END;
        
        
        -- @description - if it&apos;s an empty string, make it null
        SET @description = CASE 
            WHEN COALESCE(LTRIM(RTRIM(@description)), &apos;&apos;) = &apos;&apos;
                THEN null
            ELSE
                LTRIM(RTRIM(@description))
        END;

    END
</pre>

<p>Okay, now all of our inputs have been normalized for better searching further down.  It&apos;s 
worth noting, that I am normalizing the @created_date to the date portion only, if you are 
using UTC in your database, you&apos;ll want to avoid this, and stick with your external 
date-time localized to UTC for the stored procedure.</p>

<p>In order to prepare the results, we are first going to create a temporary table within the 
stored procedure in order to store our paged result set.  I am going to use this temporary space 
in order to separate the individual row number, and row count from the returned results.  You&apos;ll want
to add this next section into the bottom of your local variable declaration.</p>

<pre class="brush: sql">    DECLARE @PagedResults AS TABLE (
        [id] UNIQUEIDENTIFIER,
        [created] DATETIME,
        [name] NVARCHAR(100),
        [description] NVARCHAR(500),
        [Row_Number] BIGINT,
        [Row_Count] BIGINT
    );</pre>

    
<p>
This temporary space will include each of the columns that we want to return as well as a Row_Number which is 
used for the results paging, as well as a Row_Count which is used for the output parameter.  Most client-side 
grids will determin their own paging based on a total row count that gets returned in the remote call.
</p>

<p>Next we will set up our results, first I&apos;m going to show you a shell of how the selection will work.</p>

<pre class="brush: sql">    /*========================================================================
    Prepare Results
    ========================================================================*/
    WITH MyTempArea AS (
        SELECT TOP (@LastRecord)
            [id],
            [created],
            [name],
            [description],
            ROW_NUMBER() OVER (
                /*ORDER BY HERE*/
            ) AS [Row_Number],
            COUNT(*) OVER () AS [Row_Count]
        FROM
            MyList
        /*WHERE CLAUSE HERE */
    )
    INSERT INTO @PagedResults
    SELECT * FROM [MyTempArea] WHERE [Row_Number] &gt;= @FirstRecord;</pre>

<p>
The template above is a general template in order to produce a paged result set.  The WITH statement 
defines a given query that is used as part of the later select.  The &quot;TOP (@LastRecord)&quot; will limit 
the inner query to the upper result limit.  The ROW_NUMBER method gives each result a number, the sorting 
will be whatever sorting is done inside the OVER statement with the ROW_NUMBER method, and the COUNT(*) will
give a total row count available from the inner query.  The WHERE clause can be defined within the inner 
query.  Finally the results, starting with @FirstRecord will be inserted into @PagedResults for further use.
</p>

<p>Next we&apos;ll expand on handling the sorting dynamically.</p>

<pre class="brush: sql">    ....
            ROW_NUMBER() OVER (
                ORDER BY
                    CASE WHEN(@Sort_Direction = &apos;ASC&apos;) THEN CASE WHEN @Sort_Column=&apos;created&apos;      THEN [created] END END ASC,
                    CASE WHEN(@Sort_Direction = &apos;ASC&apos;) THEN CASE WHEN @Sort_Column=&apos;name&apos;         THEN [name] END END ASC,
                    CASE WHEN(@Sort_Direction = &apos;ASC&apos;) THEN CASE WHEN @Sort_Column=&apos;description&apos;  THEN [description&apos;] END END ASC,
                    CASE WHEN(@Sort_Direction = &apos;DESC&apos;) THEN CASE WHEN @Sort_Column=&apos;created&apos;     THEN [created] END END DESC,
                    CASE WHEN(@Sort_Direction = &apos;DESC&apos;) THEN CASE WHEN @Sort_Column=&apos;name&apos;        THEN [name] END END DESC,
                    CASE WHEN(@Sort_Direction = &apos;DESC&apos;) THEN CASE WHEN @Sort_Column=&apos;description&apos; THEN [description&apos;] END END DESC
            ) AS [Row_Number]
    ....
</pre>
<p>
Again the reason this sorting happens within the ROW_NUMBER method&apos;s OVER, is calling the 
ROW_NUMBER will sort the results by ROW_NUMBER.  The sorting itself may seem somewhat 
confusing, in essense for each column that may be part of a sort, you will want to have a 
CASE statement for that pair, if you need a multicolumn sort, then do the same case 
statement with the other column in the THEN portion.  You can&apos;t include the ASC and DESC 
as part of thw CASE statement, but you can do the column names.  It&apos;s necessary to do the 
nested WHEN clause in order to prevent correlation between the different column&apos;s types in 
SQL&apos;s query optimizer.  Next to the paging, the dynamic handling of sorting is the most 
complicated piece of this puzzle.
</p>


<p>
Next comes the WHERE clause.  This gets somewhat complicated, and you can adjust to suit 
your needs, I&apos;m going to use a couple tricks for hanlding the default inputs.
</p>

<pre class="brush: sql">    ...
        WHERE
            [id] = COALESCE(@id, [id])
            AND (
                @name is null
                OR    
                @name like &apos;%&apos; + COALESCE(@name, [name]) + &apos;%&apos;
            )
            AND (
                @description is null
                OR
                @description like &apos;%&apos; + COALESCE(@description, [description]) + &apos;%&apos;
            )
            AND (
                @created_filter is null
                OR ( @created_filter = &apos;ne&apos; AND [created] &lt; @created_date AND [created] &gt;= (@created_date + 1) ) 
                OR ( @created_filter = &apos;g&apos; AND [created] &gt; (@created_date + 1) ) 
                OR ( @created_filter = &apos;ge&apos; AND [created] &gt;= @created_date ) 
                OR ( @created_filter = &apos;e&apos; AND [created] &gt;= @created_date AND [created] &lt; (@created_date + 1) )
                OR ( @created_filter = &apos;le&apos; AND [created] &lt; (@created_date + 1) )
                OR ( @created_filter = &apos;l&apos; AND [created] &lt; @created_date )
            )
    ...</pre>

<p>
First, the expected @created_date filter should be the beginning of the day/date ie. the date part only, if you&apos;re 
using UTC for date/time storage within the database, you should avoid the normalizing of the date to the date 
portion in the filter normalization.
</p>

<p>
Last, but not least, you&apos;ll need to return your results...
</p>

<pre class="brush: sql">    /*========================================================================
    Return Results
    ========================================================================*/
    -- @Row_Count output param
    SELECT @Row_Count = COALESCE(MAX(Row_Count), 0) FROM @PagedResults;

    -- Paged results set to return
    SELECT    
            [id]
            ,[created]
            ,[name]
            ,[description]
    FROM @PagedResults
    ORDER BY [Row_Number];
    ...
</pre> 

<p>Here&apos;s the demo script for download: <a href="./files/PagedResultDemo.sql" test="true">PagedResultDemo.sql (9.37 kb)</a></p></div>