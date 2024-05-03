import '../css/App.css';
import '../css/Vacc.css';

const data = [
  { sno: 1, Details: "Cs class 12 Teacher", href: "https://example.com" },
  { sno: 2, Details: "Math class 10 Teacher", href: "https://example.com" },
  { sno: 3, Details: "Science class 8 Teacher", href: "https://example.com" },
  { sno: 4, Details: "English class 6 Teacher", href: "https://example.com" },
  { sno: 5, Details: "History class 9 Teacher", href: "https://example.com" },
  // Add more data objects as needed
];

function VacExam(){
    return(<div id="body">
       <table>
    <thead>
      <tr>
        <th>Sno.</th>
        <th id='detail'>Detail</th>
        <th>Visit</th>
      </tr>
    </thead>
    <tbody>
      {data.map((data, index) => (
        <tr key={index}>
          <td>{data.sno}</td>
          <td>{data.Details}</td>
          <td><a href={data.href}>{data.href}</a></td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>)
}
export default VacExam;