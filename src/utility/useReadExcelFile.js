import {useState,useEffect} from "react";
import * as XLSX from "xlsx";

const useReadExcelFile = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=> {

    }, [file, data, error]);

    const readExcelFile = (e) => {
        e.preventDefault();
        const [file] = e.target.files;
        const reader = new FileReader();
    
        reader.onload = (evt) => {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
    
          setFile(data);
          console.log(data);
        };
        reader.readAsBinaryString(file);
      };

   
    return {data, error,readExcelFile};
}
 
export default useReadExcelFile;


