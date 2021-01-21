function Translate(word,language){
    this.apikey="04122d8c10msh0b40a11bcc0f9f9p1da4fejsn061198aa873b";
    this.word=word;
    this.language=language;

    //XHR  obj oluştur

    this.xhr = new XMLHttpRequest();
}
Translate.prototype.translateWord = function(callback){
    //ajax işlemleri
    const endpoint =`https://kiara-translate.p.rapidapi.com/get_translated/?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endpoint);

    this.xhr.onload = () =>{
        if(this.xhr.status===200){
            const json = JSON.parse(this.xhr.responseText);
            const text= json.text[0];
            callback(null,text);
            // console.log(text);

            // console.log(JSON.parse(this.xhr.responseText).text[0]);//bunu daha düzgün hale getirecek olursak

        }
        else{
          callback("Bir hata oluştu..",null);
        }
    }
    this.xhr.send();
};
//word ve language yi dinamik olarak bu fonksiyo değiştirecek
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word=newWord;
    this.language= newLanguage;
}
 