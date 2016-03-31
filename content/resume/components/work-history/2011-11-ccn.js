export default render(props) {
  return <div className="wh-position">
    <h3>Collector Car Network</h3>
    <table class="info-detail">
      <tr>
        <th>Position</th>
        <td>Senior Developer & Architect</td>
      </tr>
      <tr>
        <th>Dates</th>

        <td>11/2011 through 5/2013</td>
      </tr>
      <tr>
        <th>Responsibilities</th>
        <td>
          Design and build internal and externally facing applications and mentor junior developers.
        </td>
      </tr>

      <tr>
        <th>Major Projects</th>
        <td>
          <u>ClassicCars.com:</u>:<br />
          Reducing load times by over 80% by improving resource packaging and using asynchronous enhancement for loading features.  The primary site runs under ASP.Net, originally ASP.Net 2 with project updates to 4.5.  Replaced the search back end utilizing an API service written in NodeJS and MongoDB, which also utilizes RabbitMQ.  Improved search visibility, and improved the look and feel of the site.  Created a client library for vehicle information report lookups, with 95% code coverage in Unit Tests (MS-Test).  Created various infrastructure services utilizing NodeJS.
          <br /><br />
          
          <u>RoadReadyCertified.com:</u>:<br />
          Architected the system around ASP.Net MVC3/4 using Entity Framework, and other modern tools (Bootstrap, Less, jQuery) to create a performant site that is usable in mobile and desktop devices.  The core of attention has since been on tablet to desktop devices.
          <br /><br />
          
          <u>PhotoGallery.ClassicCars.com:</u>:<br />
          Created an HTML5 application including client-side routing and support for ajax crawling (shebang urls).  The backend utilizes ASP.Net MVC3 and Entity Framework.
          <br /><br />
          
          <u>Other:</u>:<br />
          Created a mail spool processing system that improved delivery rates, while also increasing visibility.  Other changes include sending from the spool via SendGrid (which allowed for other enhancements and tracking).
          <br /><br />
        </td>
      </tr>

      <tr>
        <th>Tools &amp; Skills</th>
        <td>
          Usability Design<br />
          Project Architecture<br />
          Lead/Mentor Developers<br />
          C# (Software Library Development)<br />
          Server-Side JavaScript (NodeJS, MongoDB)<br />
          ASP.Net (C#)<br />
          ASP.Net MVC 3-4 (C#, JSON, HTML5, CSS3)<br />
          Twitter Bootstrap (CSS/Less, JavaScript)<br />
          JavaScript (DHTML, AJAX, jQuery, jQuery Validation, JSON)<br />
        </td>

      </tr>
    </table>
  </div>;
}