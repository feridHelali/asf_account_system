class AccountModel {
  constructor (code, label) {
    this.code = code
    this.label = label
  }

  get Code () {
    return this.code
  }

  set Code (value) {
    this.code = value
  }

  toString () {
    return `code:${this.code} label:${this.label}`
  }
}

class BackAccoutModel extends AccountModel {
  constructor (code, label, bancName) {
    super(code, label)
    this.bancName = bancName
  }

  toString () {
    return `code:${this.code} label:${this.label} banc:${this.bancName}`
  }
}

class Journal {
  constructor (startDate, endDate) {
    this.startDate = startDate
    this.endDate = endDate
  }
}

class AccountListModel {
    accountList=[]
  
    addAccountToList (account) {
      this.accountList.push(account)
    }
  }