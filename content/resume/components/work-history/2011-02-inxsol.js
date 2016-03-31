export default render(props) {
  return <div className="wh-position">
    <h3>inXsol</h3>
    <table class="info-detail">
      <tr>
        <th>Position</th>
        <td>Director of Software Engineering</td>
      </tr>
      <tr>
        <th>Dates</th>

        <td>02/2011 through 11/2011</td>
      </tr>
      <tr>
        <th>Responsibilities</th>
        <td>
          Manage and direct development efforts on various projects within the organization.
        </td>
      </tr>

      <tr>
        <th>Major Projects</th>
        <td>
          <u>Command Plan</u>:<br />
          Worked on creating a web based version of the Command Plan incident command training software.
          The software utilizes a flash based client written in Flex (Flash Builder 4) with Actionscript. 
          There are also authoring components created in Flex as well.  The front end is using ASP.Net WebForms, 
          with portions using an MVC 3 interface.  Portions of the front end are written with HTML5 tags and CSS3 
          style decorations.  The backend has several tiers including web based service interfaces, a communication 
          router (message queue) using WCF in a Windows Service as well as the simulation engine itself using a WCF 
          interface in a Windows Service.  This allows for future scalability with different teirs being able to 
          grow into multiple physical systems as the need arises.  There is also a speach processing service which 
          utilizes FLOSS Java components.
          <br /><br />
        </td>
      </tr>

      <tr>
        <th>Tools &amp; Skills</th>
        <td>
          Project Management<br />
          Lead/Mentor Developers<br />
          C# (Software Library Development)<br />
          VB .Net (Software Library Development)<br />
          Windows Communications Foundation (WCF)<br />
          ASP.Net (C#, VB.Net)<br />
          ASP.Net MVC 3 (JSON, HTML5, CSS3)<br />
          JavaScript (DHTML, AJAX, jQuery, jQuery Validation, JSON)<br />
          Flash Builder 4 (Flex 4, ActionScript 3)
        </td>

      </tr>
    </table>
  </div>;
}