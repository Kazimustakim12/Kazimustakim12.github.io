let url = "https://api.covid19api.com/summary";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    ShowData(data);
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function ShowData(data) {
  const output = document.querySelector(".tbody");
  const CurDate = document.querySelector("#Dateinfo");
  CurDate.innerHTML = `Date : ${data.Date.substring(0, 10)}`;
  for (let i = 0; i < data.Countries.length; i++) {
    // const listData = data.Countries[i];
    var tr = document.createElement("tr");
    const listData = data.Countries[i];
    tr.innerHTML = `<th scope="row">${data.Countries[i].CountryCode}</th>
      <td>${listData.Country}</td>
         <td>${listData.NewConfirmed}</td>
       <td>${listData.TotalConfirmed}</td>`;

    output.appendChild(tr);
  }
}
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.querySelector("#myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector(".tbody");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
