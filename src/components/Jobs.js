import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';
import Job from "../components/Job"

const Jobs = () => {

    const MANAGER_METRICS = [
        {metric_title:"Store Performance:", metric_description:"Increased sales by 10% through availability, decreased costs by 30% through labour saving strategies. "},
        {metric_title:"Inventory Management:", metric_description:"Utilised JIT management to reduce fresh waste by 30%. Ran project to create zero warehouse inventory, leading to 40% increase in scanning speed on ambient lines, and 12.5% on chilled."},
        {metric_title:"KPIs:", metric_description:"Improved labour scheduling resulting in 25% budget saving on hours spent. Successful 'RGIS' count variant of only 1%, matching shrinkage target. Achieved a 100% score for two years on license-to-trade."}
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
        {metric_title:"KPIs and Strategic Insights", metric_description:"Created KPIs monitoring process, allowing for management insight into success of operations, leading to 20% improvement in efficiency, and labour hour reduction of 10%."},
        {metric_title:"SAP with SQL:", metric_description:"Transformed data storage to new SAP system with filtered SQL querying, improving "}
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
        {metric_title:"Data Transformation", metric_description:"Created Salesforce models to replace some Excel processes, automating calculations to reduce data entry errors by 100%. Automated Archdesk accounting report creation, and upload, saving 20% of daily labour spend."},
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
        {metric_title:"Database:", metric_description:"Improved SAP functionality by creating custom 'view' tables for pricing department, saving average time on batch loading by 50%. Automated latest, global, tax values and code uploads to SAP, saving one day of work every week. Taught SQL to two colleagues, tripling response time to correct SAP errors, and reducing call outs to IT by 90%."},
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
        {metric_title:"Merchandise and Inventory:", metric_description:"Optimised inventory levels, raising internal 'availibility' KPI to high 90% each year. Created bakery stock monitoring forms, reducing waste by 50% and increasing sales year-on-year by 15%."},
        {metric_title:"KPIs", metric_description:"Analysed annual trends on frozen foods, leading to a 5% increase on sales year-on-year. Spent time coaching colleagues on product saving techniques, reducing average waste to 50% of budget."}
    ];

    const DATA_ANALYST_HARD_SKILLS = [
        {skill_title:"Excel"}, 
        {skill_title:"Proprietary Software ('RSS')"}
    ];

    const DATA_ANALYST_SOFT_SKILLS = [
        {skill_title:"Project Management"}, 
        {skill_title:"Multitasking"}
    ];

    const JOB_WEBSITES = [
        {sainsbo_site: ""},
    ];

    const JOB_DATA = [
        {year:"2022 — 2024", title:"Trading and Operations Manager", company: "Sainsbury's", description: "Analysed store performance to identify improvements for profitability. Created operational changes and strategies to increase efficiency and reduce costs. Lead and managed teams to achieve sales. Analysed seasonal changes, visual presentation, and inventory management. Measured KPIs, and ensured compliance with company policies and standards.", metrics: MANAGER_METRICS, hard_skills: MANAGER_HARD_SKILLS, soft_skills: MANAGER_SOFT_SKILLS},
        {year:"2021 — 2022", title:"Operations Controller", company: "Zapi UK", description: "Used advanced data tools and programming skills, including SQL, SAP database programming, Excel, and VBA, to conduct logistics data analytics. Monitor KPIs, develop strategic insights, and create data visualisations using QlikView/QlikSense. Manage logistics, pricing, and stakeholder relationships, while performing forecasts and material quantity planning.", metrics: OPERATIONS_CONTROLLER_METRICS, hard_skills: OPERATIONS_HARD_SKILLS, soft_skills: OPERATIONS_SOFT_SKILLS},
        {year:"2021 — 2021", title:"Data Engineer", company: "Stef & Philips", description: "Manage data engineering tasks from cloud sources, including construction data management and migration. Develop and experiment with Salesforce, and build custom add-ons for Monday.com using ReactJS. Utilise VBA for big data processing and custom formulas, and conduct pricing analytics with Archdesk. Perform data presentation of downtime activities, material quantity analysis, and purchasing trend analysis to support operational decisions.", metrics: DATA_ENGINEER_METRICS, hard_skills: DATA_ENGINEER_HARD_SKILLS, soft_skills: DATA_ENGINEER_SOFT_SKILLS},
        {year:"2017 — 2018", title:"SQL Developer", company: "Marks & Spencer", description: "Utilise SQL for table creation and querying, and apply Visual Basic and Excel formulas for data analysis. Conduct international wholesale billing analysis, manage relationships, and handle crediting and invoicing. Create pivot tables and data visualisations to interpret complex data, performing weekly analysis on half a million lines. Set up and manage pricing and promotional strategies for sales products.", metrics: SQL_METRICS, hard_skills: SQL_HARD_SKILLS, soft_skills: SQL_SOFT_SKILLS},
        {year:"2010 — 2014, 2018 — 2020", title:"Data Analyst", company: "Sainsbury's", description: "Analyse sales data to identify trends and manage inventory levels, using forecasts to guide future sales. Develop and maintain merchandise plans, provide insights for buying decisions, and conduct competitor analysis and market research to shape strategic direction.", metrics: DATA_ANALYST_METRICS, hard_skills: DATA_ANALYST_HARD_SKILLS, soft_skills: DATA_ANALYST_SOFT_SKILLS},
    ];


    return (
        <div className="job-flex large-padding-bottom">
            <h1 className='medium-padding-bottom'>Experience</h1>
            {JOB_DATA.map((job, index) => (
                <Job key={index} year={job.year} title={job.title} company={job.company} description={job.description} METRICARRAY={job.metrics} HARDSKILLS={job.hard_skills} SOFTSKILLS={job.soft_skills}/>
            ))}
            <div>
                <a className='flex-row-standard small-margin-bottom' href="https://www.linkedin.com/in/chris-selwood/" alt="linkedin" rel="noreferrer" target='_blank'>
                    <h3 className='action-name'>View on LinkedIn</h3>
                    <Icon className="action-icon" path={mdiArrowTopRight} size={0.9} />
                </a>
                <a className='flex-row-standard small-margin-top' href="https://www.linkedin.com/in/chris-selwood/" alt="resume" rel="noreferrer" target='_blank'>
                    <h3 className='action-name right-hand-padding'>Check back soon for my updated CV!</h3>
                </a>
            </div>
        </div>
    );
};

export default Jobs;