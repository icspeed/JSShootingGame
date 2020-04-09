/*게임의 사물 중 총알을 정의한다!!*/
class Bullet{
    //총알의 속성
    //개발자는 이 총알의 생성자를 호출할때 총알이 붙을  container,
    //총알의  x,y 축 위치까지 넘겨야 한다!!
    constructor(container,x,y){
        this.container=container;//어느 부모에 붙일지 그 부모결정!!
        this.img=document.createElement("img");
        this.src="../images/plane/ball.png";
        this.img.src=this.src;
        this.width=20;
        this.height=20;
        this.x=x;
        this.y=y;
        this.velX=10;
        this.velY=0;

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        //부모에 총알 부착!!
        container.appendChild(this.img);
        this.d=0;
    }

    //동작관련!!(동작은 메서드로 정의한다!!)
    tick(){
        this.x += this.velX;
        this.y += this.velY;

        var count=0;//적군과 마주쳤는지 체크 
        /*-------------------------------------------------------------------------
         적군 죽이기
        -------------------------------------------------------------------------*/
        for(var i=0;i<enemyArray.length;i++){            
            var result = collisionCheck(this.img, enemyArray[i].img);

            if(result){
                //너죽고 
                this.container.removeChild(enemyArray[i].img);
                //enemyIndex = enemyArray.indexOf(enemyArray[i]);//적군을 죽이는 코드에서 index를 따로 구하면 안된다
                //왜? 반복문의 i번째 적군이 지금 검사 대상이므로    
                enemyArray.splice(i,1);
                count++;
            }            
        }

        /*-------------------------------------------------------------------------
         나 죽이기
         나를 죽이는 코드는 반복문안에 있을 필요없다. 왜?? 나는 한번만 죽어야 하므로..
        -------------------------------------------------------------------------*/
        if(count>0){ //마주친 거임
            this.container.removeChild(this.img);
            var bulletIndex = bulletArray.indexOf(this);
            bulletArray.splice(bulletIndex, 1);
        }

        //총알의  x좌표값이 화면을 나갔는지 파악하여, 나갔다면 
        //화면에서뿐만 아니라 배열에서도 삭제!!
        if(this.x >= screen.width){
            //화면에서 제거!!! (자살!!)
            this.container.removeChild(this.img);

            //배열에서 지우지 않으면 계속 시도하게 된다!
            var index = bulletArray.indexOf(this);
            bulletArray.splice(index, 1);
        }
    }

    //변화된 물리량을 이용하여, 화면에 표시!!
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}