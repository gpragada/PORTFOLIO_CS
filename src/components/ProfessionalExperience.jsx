import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalExperience = () => {
  return (
    <section id="professional-experience" className="py-20 bg-primary-bg text-text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-accent mb-10 text-center">Professional Experience</h2>

        <div className="space-y-10">
          {/* Northern Trust Internship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-6 rounded-lg shadow-md border border-hud-outline"
          >
            <h3 className="text-xl font-semibold text-gold-glow">Data Analyst Intern – Northern Trust</h3>
            <p className="text-sm text-text-secondary mb-2">Jan 2025 – Current | Binghamton, NY</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Built automated Python scripts using pandas, NumPy, and SQL to clean, merge, and transform multi-source financial data, reducing prep time by 40%.</li>
              <li>Developed Tableau dashboards visualizing P&L trends, fund performance, and client flows, improving report turnaround by 3x.</li>
              <li>Created dbt and BigQuery-based ETL workflows ingesting 5M+ transactions into Snowflake with 99.8% accuracy.</li>
              <li>Integrated Jupyter Notebooks and Git versioning into analytics pipelines, improving reproducibility and collaboration.</li>
              <li>Supported migration from PostgreSQL to AWS Redshift and S3 architecture, contributing to 25% cloud cost savings.</li>
              <li>Designed Looker dashboards with Oracle Fusion Data Intelligence for Risk & Compliance, reducing reporting delays by 45%.</li>
            </ul>
          </motion.div>

          {/* TCS Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-6 rounded-lg shadow-md border border-hud-outline"
          >
            <h3 className="text-xl font-semibold text-gold-glow">Data Analyst – Tata Consultancy Services (TCS)</h3>
            <p className="text-sm text-text-secondary mb-2">Apr 2021 – Jul 2023 | Hyderabad, India</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Analyzed 20M+ records using SQL and Python, improving customer retention by 12%.</li>
              <li>Migrated 10+ databases to Azure SQL with zero downtime for 2 global clients.</li>
              <li>Built ETL pipelines (Airflow, dbt, SSIS) integrating CRM, Synapse, and payment systems.</li>
              <li>Developed 15+ Power BI dashboards with RLS, replacing Excel models for 200+ users.</li>
              <li>Improved report runtimes by 60% through SQL optimization and index tuning.</li>
              <li>Created stored procedures, triggers, and high-availability T-SQL environments.</li>
              <li>Built predictive churn models using Python and R, improving accuracy significantly.</li>
              <li>Implemented PowerApps, SharePoint tools, and ChatGPT prompt templates for support automation.</li>
            </ul>
          </motion.div>

          {/* Cybage Internship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-6 rounded-lg shadow-md border border-hud-outline"
          >
            <h3 className="text-xl font-semibold text-gold-glow">Data Analyst Intern – Cybage Software</h3>
            <p className="text-sm text-text-secondary mb-2">Jan 2019 – Mar 2021 | Hyderabad, India</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Cleaned 15K+ rows of cloud usage data using Python (Pandas), cutting Excel work by 60%.</li>
              <li>Wrote 10+ optimized PostgreSQL queries, reducing reporting time by 30%.</li>
              <li>Built 3 ETL pipelines in Snowflake and dbt for cloud migration analytics.</li>
              <li>Designed 4+ Tableau dashboards for visualizing cost patterns, uncovering 10–15% savings.</li>
              <li>Automated project reports with Excel VBA, reducing manual work by 40%.</li>
              <li>Maintained Jira boards for 2 teams, ensuring 100% sprint closure.</li>
              <li>Created Power Automate workflows used across 3 global regions.</li>
              <li>Helped identify latency bottlenecks via A/B tests, improving uptime by 25%.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
