const app=Vue.createApp({
    // template:'<h3>The final empire</h3>'
    data(){
        return {
            showbooks:true,
            title:'Big bang story',
            author:'mcgregor',
            age:28,
            books:[
                {title:'To Kill a Mockingbird',author:'Harper Lee', img:'assets/book1.png',isFav:true},
                {title:'Pride and Prejudice',author:'Jane Austen',img:'assets/book2.png',isFav:false},
                {title:'Sapiens: A Brief History of Humankind',author:'Yuval Noah Harari',img:'assets/book3.png',
                    isFav:true
                }
            ],
            x:0,
            y:0
        }
    },
    methods:{
        changeTitle(title){
            this.title=title
        },
        toggleShowBooks(){
            this.showbooks=!this.showbooks;
        },
        handleEvent(e,data){
            console.log("Event :",e);
            if(data)
                console.log(data);
        },
        handlemousemove(e){
            this.x=e.offsetX;
            this.y=e.offsetY;
        },
        toggleBook(book){
            book.isFav=!book.isFav;
        },
    }
})
app.mount('#app')