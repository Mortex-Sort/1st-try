// ================= PRINT BILL FUNCTION =================

window.printBill = function () {
  const billElement = document.getElementById("bill");

  if (!billElement) {
    alert("Bill section not found!");
    return;
  }

  // Get bill content
  const billContent = billElement.innerHTML;

  // Create a new window for printing
  const printWindow = window.open("", "", "width=800,height=600");

  printWindow.document.write(`
    <html>
    <head>
      <title>Print Bill</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        h2 {
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        table, th, td {
          border: 1px solid black;
        }

        th, td {
          padding: 8px;
          text-align: center;
        }

        .total {
          font-weight: bold;
          font-size: 18px;
        }
      </style>
    </head>

    <body>
      ${billContent}
    </body>
    </html>
  `);

  printWindow.document.close();

  // Wait for content to load before printing
  printWindow.onload = function () {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
};