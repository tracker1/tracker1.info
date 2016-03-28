export default render(props) {
  return <div className="wh-position">
    <h3>Wells Fargo Bank (COMSYS)</h3>
    <table class="info-detail">
      <tr>
        <th>Position</th>
        <td>Senior Developer</td>
      </tr>
      <tr>
        <th>Dates</th>

        <td>06/2009 through 06/2010</td>
      </tr>
      <tr>
        <th>Responsibilities</th>
        <td>
          Develop and enhance web based applications.  Design, develop and enhance 
          T-SQL stored procedures within MS-SQL 2005/2008 data stores.
        </td>
      </tr>

      <tr>
        <th>Major Projects</th>
        <td>
          <u>ART Workflow WCF Service</u>:<br />
          Worked on an interactive WCF service endpoints for use with integrating the main 
          Access Request Tool (ART) applications and related applications.
          <br /><br />

          <u>ART Workflow UI</u>:<br />
          Worked on an ExtJS based application backed by a WCF/Ajax service for the UI interactions.
          The ART Workflow UI is used by systems analysts in order to facilitate their work queues
          for managing access to various systems within the Wells Fargo infrastructure
          <br /><br />

          <u>ART Approval</u>:<br />
          ART Approval is a jQuery and jQueryUI based front end that facilitates the approval of given 
          personel and resources for said personel in order to approve or deny the request 
          for a given resource.  It is backed by an ASMX JSON/Ajax service for the main approval task 
          listings.  The approval task listings are serviced by a stored procedure that supports both 
          paging and filtering.
          <br /><br />

          <u>ART Request</u>:<br />
          ART Request is a UI interface for requesting access for various personal to various 
          systems resources.  There are many different request forms, and logic related to reports to
          information as well as a complex set of workloads that combine jQueryUI as well as the 
          Microsoft Ajax Toolkit.
          <br /><br />
        </td>
      </tr>
      <tr>
        <th>Tools &amp; Skills</th>
        <td>
          C# (Software Library Development)<br />
          Microsoft SQL Server (v2005)<br />
          WCF Web Services<br />
          ASP.Net (C#)<br />
          ASP.Net Web Services<br />
          JavaScript (DHTML, AJAX, jQuery, jQueryUI)<br />
          Microsoft Ajax Toolkit<br />
        </td>

      </tr>
    </table>
  </div>;
}