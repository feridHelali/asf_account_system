class AccountListView {
  renderAccounts (accountList) {
    dataGrid.innerHTML = ''
    for (const account of accountList) {
      var row = dataGrid.insertRow(-1)
      var codeCell = row.insertCell(0)
      var labelCell = row.insertCell(1)
      codeCell.innerHTML = account.code
      labelCell.innerHTML = account.label
    }
  }
}


