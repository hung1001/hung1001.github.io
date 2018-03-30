var id = "comment-holder";
var url = "https://hung1001.github.io/image/emoji/";
var hung1001_icon = [
    { text: ":v", img: "pacman.png" },
    { text: ":d", img: "1.png" },
    { text: ":-D", img: "2.png" },
    { text: ":(|", img: "3.png" },
    { text: ":-)", img: "4.png" },
    { text: "^^", img: "5.png" },
    { text: "^.^", img: "6.png" },
    { text: "^-^", img: "7.png" },
    { text: ";)", img: "8.png" },
    { text: ":]", img: "9.png" },
    { text: ":*", img: "10.png" },
    { text: ":B", img: "11.png" },
    { text: ":~|", img: "12.png" },
    { text: ":~D", img: "13.png" },
    { text: ":&gt;", img: "14.png" },
    { text: ":-&gt;", img: "15.png" },
    { text: ":=&gt;", img: "16.png" },
    { text: "=)", img: "17.png" },
    { text: ":)", img: "18.png" },
    { text: "-.-", img: "19.png" },
    { text: "-_-", img: "20.png" },
    { text: "/no", img: "21.png" },
    { text: "-_*", img: "22.png" },
    { text: ":-(", img: "23.png" },
    { text: ":=(", img: "24.png" },
    { text: "/-o", img: "25.png" },
    { text: "/tired", img: "26.png" },
    { text: "/sl", img: "27.png" },
    { text: ":z", img: "28.png" },
    { text: ":-p", img: "29.png" },
    { text: ":~p", img: "30.png" },
    { text: ":=p", img: "31.png" },
    { text: ":_p", img: "32.png" },
    { text: ":^z", img: "33.png" },
    { text: "~~", img: "34.png" },
    { text: ";-|", img: "35.png" },
    { text: ":x", img: "36.png" },
    { text: ":w", img: "37.png" },
    { text: ":sad", img: "38.png" },
    { text: "=((", img: "39.png" },
    { text: ":hum", img: "40.png" },
    { text: ":^((", img: "41.png" },
    { text: ":huhu", img: "42.png" },
    { text: ":haiz", img: "43.png" },
    { text: "/sad", img: "44.png" },
    { text: "/^(", img: "45.png" },
    { text: ":-Q", img: "46.png" },
    { text: ":=Q", img: "47.png" },
    { text: ":Q", img: "48.png" },
    { text: "o_o", img: "49.png" },
    { text: "@.@", img: "50.png" },
    { text: ":angry", img: "51.png" },
    { text: "/angry", img: "52.png" },
    { text: "|-D", img: "53.png" },
    { text: ":-O", img: "54.png" },
    { text: ":T", img: "55.png" },
    { text: ":-T", img: "56.png" },
    { text: ":ok", img: "57.png" },
    { text: "(Y)", img: "58.png" },
    { text: "(D)", img: "59.png" },
    { text: "/clap", img: "61.png" },
    { text: "/hand", img: "62.png" },
    { text: "&lt;3", img: "63.png" },
    { text: "/VN", img: "64.png" },
    { text: "&lt;-3", img: "65.png" },
    { text: "&lt;=3", img: "66.png" },
    { text: "/cup", img: "67.png" },
    { text: "/100", img: "68.png" },
    { text: "/!", img: "69.png" },
    { text: "/done", img: "70.png" },
    { text: "/gun", img: "71.png" },
    { text: "/sun", img: "72.png" }
];
for (var i = 0; i < hung1001_icon.length; i++) {
    hung1001_icon[i].img = url + hung1001_icon[i].img;
}
var a = document.getElementById(id);
var b = a.getElementsByTagName("p");
if (b) {
    for (i = 0; i < b.length; i++) {
        c = b.item(i).innerHTML;
        for (var j = 0; j < hung1001_icon.length; j++) {
            c = c.replace(hung1001_icon[j].text, "<img src=\"" + hung1001_icon[j].img + "\"/>");
        }

        b.item(i).innerHTML = c;
    }
}