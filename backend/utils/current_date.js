const months = [
                "January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"
               ];

module.exports = () => {
    const d = new Date();
    const date = d.getDate().toString();
    const month = months[d.getMonth()]
    const year = d.getFullYear().toString();
    
    return date + " " + month.substring(0,3) + " " + year;
}