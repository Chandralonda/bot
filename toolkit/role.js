export const role = function(chat){
    let res;
    if (chat <= 10) {
        res = "Gak kenal";
    } else if (chat <= 50) {
        res = "Baru kenal";
    } else if (chat <= 100) {
        res = "Temen biasa";
    } else if (chat <= 300) {
        res = "Temen Ngobrol";
    } else if (chat <= 500) {
        res = "Temen Gosip";
    } else if (chat <= 650) {
        res = "Temen Lama";
    } else if (chat <= 1000) {
        res = "Temen Hangout";
    } else if (chat <= 1500) {
        res = "Temen Deket";
    } else if (chat <= 2500) {
        res = "Temen Akrab";
    } else if (chat <= 3000) {
        res = "Temen Baik";
    } else if (chat <= 3900) {
        res = "Sahabat";
    } else if (chat <= 4500) {
        res = "Sahabat Deket";
    } else if (chat <= 5200) {
        res = "Sahabat Sejati";
    } else if (chat <= 25000) {
        res = "Pacar";
    } else {
        res = "🎀Soulmate🦋"
    }
    return res;
}

