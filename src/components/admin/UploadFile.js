import {useState} from "react";

const UploadFile = () => {
    const [selectedFileName, setSelectedFileName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData() 
        data.append('file', selectedFileName)
        console.warn(selectedFileName);
       // alert(`Upload file ${selectedFileName} `)
    }

    return ( <div>
        <div>
            <label className="text-white">Select File :</label>
            <input type="file" className="form-control" name="upload_file" onChange={(e) => setSelectedFileName(e.target.value)} />
            <button onClick={handleSubmit}>UploadImage</button>
        </div>
    </div> );
}
 
export default UploadFile;