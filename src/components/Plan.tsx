import AnimPlan from './Animation/AnimPlan';

const Plan = () => {
    return (
        <section className="page__plan plan">

            <h2 className="plan__title">Пошаговый <span className='title--line'>план</span></h2>

            <AnimPlan />
        </section>
    );
};

export default Plan;