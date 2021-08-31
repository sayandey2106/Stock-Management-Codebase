// let _DEV_ = document.domain === "localhost";
const key = "rzp_live_lMlEdUdYhkoR8x";

const loadScript = (src) => {
    return new Promise((resolve => {
        const script = document.createElement('script');
        script.src = src
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
    }))
}


async function pay(amount, company_id) {
    // console.log("Payed successfully" + description)
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!res) {
        alert("RazorPay SDK failed to load. Check Your Internet Connection")
        return
    }

    let data = await fetch("https://server-bumqe7vyuq-el.a.run.app/corporate_pay", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            amount:amount
        })
    }).then(resp => resp.json())
        .catch(console.log)
    console.log(data)

    const options = {
        "key": key,
        "amount": amount*100, // 100p = 1rs / 100cents = 1$
        "currency": amount.currency,
        // "name": "QUBI 7",
        // "description": "SCAN QR " + description,
        // "image": details.image,
        // "image": "https://firebasestorage.googleapis.com/v0/b/kiosk-72887.appspot.com/o/output-onlinepngtools.png?alt=media&token=f1002906-cc77-472c-b819-5d33b24fa973",
        "order_id": data.id,

        // "handler": function (response) {
        //     alert("payment_id: " + response.razorpay_payment_id);
        //     alert("order_id: " + response.razorpay_order_id);
        //     alert("signature: " + response.razorpay_signature);
        // }
        "handler": function (response){
          window.location.href = "https://corporate.qubi7.com/"
       },
        "theme": {
            // color: "green"
        },
        "modal": {
            escape: true,
        },
        "notes": {
            type: 'C',
            company_id: company_id,
            // type:'D'
        }

    };
    const paymentObject = new window.Razorpay(options)
    paymentObject.open();
}

export default pay;
