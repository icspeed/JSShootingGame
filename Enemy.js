/*적군을 정의한다!!
클래스는 새로운 기술이 아니라, 기존의 변수, 함수를 
묶어놓은 집합에 불과..
고전적인  프로그래밍 언어에서는 함수를 이용하여 로직을
재사용햇지만, 클래스는 더 나아가 변수와 함수를 하나로
묶어서 현실의 객체를 표현한 것뿐이다..따라서 신기술이
아니라 개발자의 현실을 바라보고 반영하는 관점이 바뀐것
뿐이다..
*/
class Enemy{
    //자바스크립트는 자바와는 달리, 멤버변수를 생성자안에
    //선언해야 한다..
    constructor(container,src,width,height,velX,velY,x,y){
        //객체(=명사)가 보유할 속성(상태=형용사)
        this.container=container; //어디에 붙을지
        this.src=src;
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;
        
        //각종 스타일 적용 
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //적군을 부모 요소에 부착!!
        container.appendChild(this.img);
    }
    //물리량의 변화
    tick(){
        this.x+=this.velX; //x축으로 움직인다..
        this.y+=this.velY; //y축으로 움직인다..
    }

    //변화된 물리량을 그래픽처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}


