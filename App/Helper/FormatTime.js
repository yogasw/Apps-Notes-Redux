import dateFormat from "dateformat";

const FormatTime = (id) => {

    dateFormat.i18n = {
        dayNames: [
            'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Ming',
            'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'
        ],
        monthNames: [
            'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sept', 'Okt', 'Nov', 'Des',
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],
        timeNames: [
            'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
        ]
    };

    return dateFormat(id, "d mmmm");
};

export default FormatTime;
