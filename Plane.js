/*게임에 등장할 우주선을 정의한다!!!
우주선은 명사!!
모든 명사는 동사,형용사로 표현!!!
동사 - 함수 (메서드로 불린다)
형용사 - 변수(속성으로 불린다)
*/
class Plane{
    //생성자는 객체지향 언어에서 사물이 태어날때, 어떠한
    //모습으로 태어날지를 결정하는 초기화 메서드를 의미!!
    //즉 생성시 객체의 초기화를 담당한다고 하여 생성자라
    //한다!!
    constructor(container){
        //상태들을 정의한다!!
         //우주선 초기화~!!
        this.container=container;//보관!!
        //그래야 다른 메서드에서도 접근이 가능!!
        this.img=document.createElement("img");
        this.img.src="../images/plane/plane.png"; //경로
        this.width=80;//너비
        this.height=70;//높이
        this.x=100; //x 포지션
        this.y=200;//y 포지션 
        this.velX=0;// x축 이동속도
        this.velY=0;//y축 이동속도

       
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //부모요소에 부착하기
        container.appendChild(this.img);
    }
    
    //우주선의 동작을 정의!!!

    //게임분야에서 물리량의 변화등을 의미!!
    tick(){
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }

    // 변화된 물리량을 화면에 표현!!
    //우리의 경우 주로 객체.style.속성=값
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}










