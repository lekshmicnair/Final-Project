INTRODUCTION


Education is a key factor for achieving long term economic progress. Our project intends to approach student achievement in secondary education using Machine Learning modeling techniques. 

Should we care about Student Performance models? 
YES

As a direct outcome of this project, more efficient student prediction tools can be  developed, improving the quality of education and enhancing school resource management. The results show that a good predictive accuracy can be achieved, provided that we have access to socio-economic data from various school districts.


One approach is to utilize machine learning to build predictive models of student performance. Through the ethical collection of student data, via academic records and surveys, a model can be created to anticipate where resources can be focused to boost student performance. This targeted application of resources can be more efficient and proactive than traditional models, with the ability to help students before warning signs appear.

For example, through predictive modeling, a tutor can be assigned before a student falls behind; or, programs can more actively provide resources to students who might be disadvantaged for various socio-economic factors.

DATA

Source: https://archive.ics.uci.edu/ml/datasets/student+performance

The Math and Portuguese data csv files were loaded and merged.

Checked for nulls and renamed the columns for better understanding.

Created final grade column for letter grades A+:18-20 A:16-17 B:14-15 C:10-13 & F<10.

ANALYSIS AND VISUALIZATIONS

Once the data was ready, we created our initial Model. We used Random Forest Classifier. We used final grade as label, and we sorted the rest of factors based on their weight. Then we analyzed the main and interesting factors and created visualizations. The questions we analyzed.

Does parent’s education level affect the kid’s performance?

Is there a gap in performance between rural and urban students?

Is alcohol consumption associated with poor academic performance?

Should the students be allowed to go out with friends frequently?

How important is attendance in academic performance?

How does students Quarter-1 and Quarter-2 scores impact Final grade?

Are aspirations for higher education important?

MODEL

PREDICT

CONCLUSION
