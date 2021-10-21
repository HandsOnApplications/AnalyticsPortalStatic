
module.exports = async function (context, req) {
const getItemsEndpoint = "http://universities.hipolabs.com/search?country=United+States";

    const [reports, setReports] = useState([]);
    
    useEffect(()=> {
        axios.get(getItemsEndpoint).then((response) => {
            setReports(response.data);
        });
    },[]);

    return reports;
};