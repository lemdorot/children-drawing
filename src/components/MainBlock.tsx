import AnimCounter from './Animation/AnimCounter';
import AnimGirl from './Animation/AnimGirl';
import AnimSpace from './Animation/AnimSpace';
import Button from './UI/Button/Button';

const MainBlock = () => {
    return (
        <section className="page-main__main-block main-block">
            <div className="main-block__wrapper">
                <p className="main-block__prev">От компании СлонУМ</p>
                <h1 className="main-block__title">Всероссийский конкурс<br/>Детского рисунка</h1>
                <p className="main-block__text">Учавствуйте в конкурсе и получайте призы в различных<br/> номинациях детского рисунка для всех возрастов</p>

                <div className="main-block__inner">
                    <Button onClick={(e: any) => e.preventDefault()} className="main-block__button">
                        Учавствовать
                    </Button>

                    <AnimCounter />
                </div>
            </div>
        
            <div className="main-block__image space">
                <AnimSpace />
                <AnimGirl />
            </div>
        </section>
    );
};

export default MainBlock;