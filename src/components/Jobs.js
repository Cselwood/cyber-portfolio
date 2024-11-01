import React from 'react';
import CV from "../assets/ChrisSelwoodCV.pdf"
import Job from "../components/Job"

const Jobs = () => {

    const MANAGER_METRICS = [
        {metric_title:"Store Performance:", metric_description:"Increased sales by 10% through availability, decreased costs by 30% through labour saving strategies. "},
        {metric_title:"Inventory Management:", metric_description:"Utilised JIT management to reduce fresh waste by 30%. Ran project to create zero warehouse inventory, leading to 40% increase in scanning speed on ambient lines, and 12.5% on chilled."},
        {metric_title:"KPIs:", metric_description:"Improved labour scheduling resulting in 25% budget saving on hours spent. Successful 'RGIS' count variant of only 1%, beating shrinkage targets by 4%. Achieved a 100% score for two years on license-to-trade."}
    ];

    const MANAGER_HARD_SKILLS = [
        {skill_title:"Excel"}, 
        {skill_title:"Proprietary Software ('RSS')"},
        {skill_title:"SAP with Khronos"}
    ];

    const MANAGER_SOFT_SKILLS = [
        {skill_title:"Leadership"}, 
        {skill_title:"Logistics and Planning"}
    ];

    const OPERATIONS_CONTROLLER_METRICS = [
        {metric_title:"Forecasting and Logistics:", metric_description:"Performed calculated forecasts with Excel to plan for material shortage to reduce delays by an average of 75%. Ran weekly JCB meeting to provide clear client feedback, reducing calls by 75%, and liaising with their materials team to improve average unit turnaround time by 10% for that client. "},
        {metric_title:"KPIs and Strategic Insights:", metric_description:"Created KPIs monitoring process, allowing for management insight into success of operations, leading to 20% improvement in efficiency, and labour hour reduction of 10%."},
        {metric_title:"SAP with SQL:", metric_description:"Transformed data storage to new SAP system with filtered SQL querying, improving data analysis efficiency by 60%. Created JCB engineering improvements data task, increasing completion time by 10%."}
    ];

    const OPERATIONS_HARD_SKILLS = [
        {skill_title:"SQL"}, 
        {skill_title:"Oracle SAP"}, 
        {skill_title:"Excel with VBA"}, 
        {skill_title:"QlikView"}, 
    ];

    const OPERATIONS_SOFT_SKILLS = [
        {skill_title:"Relationship Management"}, 
        {skill_title:"Logistics"}
    ];

    const DATA_ENGINEER_METRICS = [
        {metric_title:"Data Transformation:", metric_description:"Created Salesforce models to replace some Excel processes, automating calculations to reduce data entry errors by 100%. Automated Archdesk accounting report creation, and upload, saving 20% of daily labour spend."},
        {metric_title:"Programming:", metric_description:"Used ReactJS with Monday.com to create proprietary, construction-logistics addon. Transformed Monday boards to streamline workflow, cutting admin time by 50% and allowing for real-time project monitoring. Provided new real-time monitoring for client transparency, resulting in almost 100% reduction in project update enquiries."},
        {metric_title:"Materials Buying:", metric_description:"Ran project to replace traditional methods to outsource materials buying to contractor, reducing average overspend on property of 25% to 5% and reducing accounting processing by 50%."}
    ];

    const DATA_ENGINEER_HARD_SKILLS = [
        {skill_title:"ReactJS"}, 
        {skill_title:"Excel with VBA"}, 
        {skill_title:"Archdesk Accounting"}, 
        {skill_title:"Salesforce"}, 
        {skill_title:"Monday.com Scripting"}, 
    ];

    const DATA_ENGINEER_SOFT_SKILLS = [
        {skill_title:"Quantity Analysis"}, 
        {skill_title:"Logistics"}
    ];

    const SQL_METRICS = [
        {metric_title:"Database:", metric_description:"Improved SAP functionality by creating custom 'view' tables for pricing department, saving average time on batch loading by 50%. Automated latest, global, tax values and code uploads to SAP, saving one day of work every week. Coached SQL to two colleagues, tripling response time to correct SAP errors, and reducing call outs to IT by 90%."},
        {metric_title:"Project Management:", metric_description:"Ran project to correct historical tax errors in billing, recovering £3m in overspend with global franchise partners over 6 month period. Ran project with auditors to isolate and fix SQL errors in batch process, halting over £100,000 of accounting overspends per week globally. Simplified retail downlift and project reports with accounting to allow Excel processing to be faster, saving 25% of processing time per batch."},
    ];

    const SQL_HARD_SKILLS = [
        {skill_title:"SQL"}, 
        {skill_title:"Oracle SAP"}, 
        {skill_title:"Excel with VBA"}, 
        {skill_title:"Big Data"}
    ];

    const SQL_SOFT_SKILLS = [
        {skill_title:"Problem Solving"},
        {skill_title:"Relationship Management"},
        {skill_title:"Presentations"}
    ];

    const DATA_ANALYST_METRICS = [
        {metric_title:"Merchandise and Inventory:", metric_description:"Optimised inventory levels, raising internal 'Availability' KPI to high 90% each year. Created bakery stock monitoring forms, reducing waste by 50% and increasing sales year-on-year by 15%."},
        {metric_title:"KPIs:", metric_description:"Analysed annual trends on frozen foods, leading to a 5% increase on sales year-on-year. Spent time coaching colleagues on product saving techniques, reducing average waste to 50% of budget."}
    ];

    const DATA_ANALYST_HARD_SKILLS = [
        {skill_title:"Excel"}, 
        {skill_title:"Proprietary Software ('RSS')"}
    ];

    const DATA_ANALYST_SOFT_SKILLS = [
        {skill_title:"Project Management"}, 
        {skill_title:"Multitasking"}
    ];

    const JOB_DATA = [
        {year:"2022 — 2024", title:"Trading and Operations Manager", company: "Sainsbury's", metrics: MANAGER_METRICS, hard_skills: MANAGER_HARD_SKILLS, soft_skills: MANAGER_SOFT_SKILLS, site: "https://www.sainsburys.co.uk", sitelabel: "Sainsburys.co.uk", location: "London, UK", background: "https://i.guim.co.uk/img/media/6f8ea55d487801bb347bee93c393a5220efeb1fc/0_141_3500_2101/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a5048ae21ff84222aaa06cd334acb51e"},
        {year:"2021 — 2022", title:"Operations Controller", company: "Zapi UK", metrics: OPERATIONS_CONTROLLER_METRICS, hard_skills: OPERATIONS_HARD_SKILLS, soft_skills: OPERATIONS_SOFT_SKILLS, site: "https://www.zapigroup.com/en/", sitelabel: "ZapiGroup.com", location: "Telford, UK"},
        {year:"2020 — 2021", title:"Data Engineer", company: "Stef & Philips", metrics: DATA_ENGINEER_METRICS, hard_skills: DATA_ENGINEER_HARD_SKILLS, soft_skills: DATA_ENGINEER_SOFT_SKILLS, site: "https://stefphilips.com/", sitelabel: "StefPhilips.com", location: "London, UK"},
        {year:"2018 — 2020", title:"Data Analyst", company: "Sainsbury's", metrics: DATA_ANALYST_METRICS, hard_skills: DATA_ANALYST_HARD_SKILLS, soft_skills: DATA_ANALYST_SOFT_SKILLS, site: "https://www.sainsburys.co.uk", sitelabel: "Sainsburys.co.uk", location: "London, UK"},
        {year:"2017 — 2018", title:"SQL Developer", company: "Marks & Spencer", metrics: SQL_METRICS, hard_skills: SQL_HARD_SKILLS, soft_skills: SQL_SOFT_SKILLS, site: "https://www.marksandspencer.com/", sitelabel: "MarksandSpencer.com", location: "London, UK"},
        ];


    return (
        <div id="experience">
            <h2 className='alt medium-padding-bottom'>What I've done.</h2>
            

            {JOB_DATA.map((job, index) => (
                <Job className="small-margin-bottom" key={index} year={job.year} title={job.title} company={job.company} description={job.description} METRICARRAY={job.metrics} HARDSKILLS={job.hard_skills} SOFTSKILLS={job.soft_skills} website={job.site} weblabel={job.sitelabel} location={job.location}/>
                
            ))}

            <div className='cvlinkedin-flex'>
                <a className='blue-button left-hand-margin right-hand-margin' href={CV} alt="resume" rel="noreferrer" target='_blank'>
                    <p>Download CV</p>
                </a>
            </div>
        </div>
    );
};

export default Jobs;