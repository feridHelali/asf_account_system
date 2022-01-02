function ctrl(){
    const addAccount = document.querySelector('#addAccount')
    const dataGrid = document.querySelector('#dataGrid')
    const accountCode = document.querySelector('#accountCode')
    const accountLabel = document.querySelector('#accountLabel')
    let account = {}
    let accountListModel = new AccountListModel()
let accountListView = new AccountListView()

addAccount.addEventListener('click', function (e) {
  account = {
    code: accountCode.value,
    label: accountLabel.value
  }
  accountListModel.addAccountToList(account)
  accountListView.renderAccounts(accountListModel.accountList)
})
}
