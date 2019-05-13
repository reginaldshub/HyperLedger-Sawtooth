# Simple Bank

**Steps  to execute  structured-bank**

 1) start the validator
   

> docker-compose -f sawtooth-default.yaml up

2) Run  Processor

  > node index.js

3. Run Client

  
  a) create account 
    

    ex: node app.js 'regi' '{"verb":"create_account", "customer_id":"101", "customer_name":"regi", "savings_balance":5000, "checking_balance":3000}'

    'regi' - > is the username to create keys to sign the transaction
        "checking_balance" - > is the wallet balance

    
  b)To deposit money from account

    ex: node app.js 'regi' '{"verb":"deposit_money", "customer_id":"101", "amount":2000}'

  c) to withdraw money from account
    

    ex: node app.js 'regi'
    '{"verb":"withdraw_money", "customer_id":"101", "amount":4000}'

  
  d) to transfer money from account
    

    Note: To transfer money we need to create another account with different id.

    ex: node app.js 'regi'
    '{"verb":"transfer_money", "source_customer_id":"101", "dest_customer_id":"102", "amount":1000}'

  e) to issue cheque from account
    

    ex: node app.js 'regi'
    '{"verb":"issue_cheque", "source_customer_id":"101", "dest_customer_id":"102", "amount":1000}'

  f) to clear checking balance
  

    ex: node app.js 'regi'
    '{"verb":"clear_checking_balance", "source_customer_id":"101", "amount":1000}'

g) to get balances

    ex: node app.js 'regi'
    '{"verb":"get_balances", "source_customer_id":"101"}'

