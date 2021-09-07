function testGS(){


    const url = "https://script.googleusercontent.com/a/macros/sierraazul.gob.pe/echo?user_content_key=A81cbO8WfsWyWCoTJoSBpAptxqJMm7x2675bW_nkwx-GIi6X3mnmwUcQEqHbO8MCWpgc2dkR7i1U89rCk1WH5fgh9Zcdrhx6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_avFjPZVN6K6_ybaYpQEfr12rJHwsZstsxbbXQd4eZLDqWZpgSHDVXGoj2v1eWdstIauAE-75VNzks1nMI0OeL4qItyj8sAuL859yGui55gA&lib=M0Pb6VfZgZSHmBqqNVmuWZ1mTezcJkO2f";


    fetch(url)
        .then(d => d.json())
        .then(d => {

                document.getElementById("app").textContent = d[0].status;

        });


}

    document.getElementById("btn").addEventListener("click",testGS);
