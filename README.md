# Simple Bank

**Steps  to execute  structured-bank**

 1) start the validator
   

> docker-compose -f sawtooth-default.yaml up

2) Run  Processor

  > node index.js

3. Run Client

  
  a) create account 
    

    ex: node app.js 'regi' '{"verb":"create_account", "customerId":101, "customerName":"regi", "savingsBalance":5000, "checkingBalance":3000}'

    node app.js 'santosh' '{"verb":"create_account", "customerId":102, "customerName":"santosh", "savingsBalance":5000, "checkingBalance":3000}'

    'regi' - > is the username to create keys to sign the transaction
        "checking_balance" - > is the wallet balance

    
  b)To deposit money from account

    ex: node app.js 'regi' '{"verb":"deposit_money", "customerId":101, "amount":2000}'

  c) to withdraw money from account
    

    ex: node app.js 'regi' '{"verb":"withdraw_money", "customerId":101, "amount":4000}'

  
  d) to transfer money from account
    

    Note: To transfer money we need to create another account with different id.

    ex: node app.js 'regi' '{"verb":"transfer_money", "sourceCustomerId":101, "destCustomerId":"102", "amount":1000}'

  e) to issue cheque from account
    

    ex: node app.js 'regi'
    '{"verb":"issue_cheque", "sourceCustomerId":101, "destCustomerId":"102", "amount":1000}'

  f) to clear checking balance
  

    ex: node app.js 'regi'
    '{"verb":"clear_checking_balance", "sourceCustomerId":"101", "amount":1000}'

g) to get balances

    ex: node app.js 'regi'
    '{"verb":"get_balances", "sourceCustomerId":"101"}'

