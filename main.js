const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            const transectionArea = document.getElementById('transection-area').style.display = "block";
        }); 

        const dipositBtn = document.getElementById("diposit");
        dipositBtn.addEventListener("click", function(){
            const dipositAmt = document.getElementById("diposit-amt").value;
            if (dipositAmt != 0){
                const dipositCnt = document.getElementById("dipositMain").innerText;
                const totalDiposit = parseFloat(dipositAmt) + parseFloat(dipositCnt);
                document.getElementById("dipositMain").innerText = totalDiposit;
                const balance = document.getElementById("balanceMain").innerText;
                const totalBalance = parseFloat(dipositAmt) + parseFloat(balance);
                document.getElementById("balanceMain").innerText = totalBalance;
                document.getElementById("diposit-amt").value ="";
                document.getElementById("diposit-amt").style.border = "1px solid #ced4da";
                document.getElementById("diposit-amt").style.backgroundColor = "white";
                document.getElementById("diposit-amt").placeholder = "$ Amount You Want To Withdraw";
            }else{
                document.getElementById("diposit-amt").style.border = "1px solid red";
                document.getElementById("diposit-amt").style.backgroundColor = "#14e73c";
                document.getElementById("diposit-amt").placeholder = "You Have To Put Something Here";
            }
        });

        const widthdraw = document.getElementById("widthdraw");
        widthdraw.addEventListener("click", function(){
            const withdrawAmt = document.getElementById("withdrawAmt").value;
            if(withdrawAmt != 0){
                const withdrawMain = document.getElementById("withdrawMain").innerText;
                const totalWithdraw = parseFloat(withdrawAmt) + parseFloat(withdrawMain);
                console.log(totalWithdraw);
                document.getElementById("withdrawMain").innerText = totalWithdraw;
                const balance = document.getElementById("balanceMain").innerText;
                const updateBalance = parseFloat(balance) - parseFloat(withdrawAmt);
                document.getElementById("balanceMain").innerText = updateBalance;
                document.getElementById("withdrawAmt").value = "";
                document.getElementById("withdrawAmt").style.border = "1px solid #ced4da";
                document.getElementById("withdrawAmt").style.backgroundColor = "white";
                document.getElementById("withdrawAmt").placeholder = "$ Amount You Want To Withdraw";
            }else{
                document.getElementById("withdrawAmt").style.border = "1px solid red";
                document.getElementById("withdrawAmt").style.backgroundColor = "#14e73c";
                document.getElementById("withdrawAmt").placeholder = "You Have To Put Something Here";
            }
        });