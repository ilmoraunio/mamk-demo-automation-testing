<companylist>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Yritystunnuksia</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ item, i in opts.items }>
        <td>{item.ytunnus}</td>
      </tr>
    </tbody>
  </table>
</companylist>