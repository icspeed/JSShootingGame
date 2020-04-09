//이퀄라이져 막대 하나를 정의한다!!
class Rect{
    constructor(container,width,height,x,y,color,a,targetH){
        this.container=container; // 어디에 붙일지..
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.color=color;
        this.a=a; //부드러운 정도를 제어할수있는 비율계수
        this.targetH=targetH;//어디까지 늘어날지를 결정..
        this.text;//사각형 안에 출력될 높이값!!

        //스타일적용 
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.textAlign="center";
        this.div.style.backgroundColor=this.color;

        //부모 요소에 부착!!
        this.container.appendChild(this.div);
    }

    //동작을 정의한다 ( 동작은 함수로 표현)
    
    
    //물리량 변화 (높이값이 늘었다 줄었다!! - 감속도로...)
    //그래픽 처리
    render(){
        this.div.style.height=parseFloat(this.div.style.height)+
            this.a*(this.targetH - parseFloat(this.div.style.height))+"px";
            
            this.div.innerText=parseFloat(this.div.style.height);
    }
}