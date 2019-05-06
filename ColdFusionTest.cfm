<cffunction name="getid" access="public" output="true" returntype="any">

     <cfquery datasource="#aplication.config.datasources.breakdown#"> <!--- SPELLING ERROR --->
             insert into breakdown_submission(breakdown_id, breakdown_user_id, date_submitted, breakdown_submission_type_id, actor_access_user_id)
             values(#form.breakdown_id#, 0, #createodbcdatetime(now())#, #form.submission_type_id#, #form.my_aa_user_id#)
     </cfquery>

     <cfquery datasource="#aplication.config.datasources.breakdown#" name="getid"><!--- SPELLING ERROR --->
             select max(breakdown_submission_id) as id
             from breakdown_submission
             where actor_access_user_id = #form.my_aa_user_id#
             and breakdown_id = #form.reakdown_id# <!--- SPELLING ERROR --->
     </cfquery>

     <cfquery datasource="#aplication.config.datasources.breakdown#"><!--- SPELLING ERROR --->
             update breakdown_submission_item
             set breakdown_submission_id = #getid.id#
             where breakdown_id = #form.breakdown_id#
             and breakdown_submission_id = 0
             and actor_access_user_id = #form.my_aa_user_id#
     </cfquery>

     <cfreturn getid />
</cffunction>

<!--- NOTES --->
<!--- For a function, it is good practice to provide either a hint or description attribute for the next programmer --->
<!--- The cffunction tag is not being rendered visually so output=flase is best. As for the access attribute, not knowing how
this function is used, I can not confidently comment here. As this is a function that runs SQL, I would limit 
the access for security reasons. ReturnType is 'query', 'any' will also work. --->
<!--- There are no arguments set for this function.  Either, there can be one for the form structure, or three argument statments for each variable. --->
<!--- The datasource attribute of the cfquery "#aplication.config.datasources.breakdown#", application is spelled with 2 p's --->
<!--- This function has three queries that can be written as one. Connecting to the DB three times is inefficient and take up resources --->
<!--- When writing SQL, variables should be declared at the top of the query. ---> 
<!--- Directly using the CF variables in the SQL is not only lazy, it is a security risk --->
<!--- More of a security risk is any variable that comes from an end users form, like any of the above "#form.XYZ#" variables--->
<!--- SQL variables should filter through a cfqueryparam with the correct cfsqltype set for security reasons--->
<!--- The function returns a query result of the 'getid' query, which is one id.  --->
<!--- See other notes below --->


<cffunction name="getid" access="public" output="false" returntype="query" hint="Updates tables breakdown_submission, breakdown_submission_item and ....">
        <cfargument name="form.breakdown_id" required="true"> <!--- I am making the assumption this is required. If it was not I would add a 'default' attribute --->
        <cfargument name="form.submission_type_id" required="true"> <!--- same --->
        <cfargument name="form.my_aa_user_id" required="true"><!--- same --->

     <cfquery name="getid" datasource="#application.config.datasources.breakdown#" > 
        declare @bdid varchar(255) = <cfqueryparam value="#arguments.form.breakdown_id#" cfsqltype="cf_sql_varchar"> <!--- using cf_sql_varchar assuming your id's are alphnumeric --->
        declare @stid varchar(255) = <cfqueryparam value="#arguments.form.submission_type_id#" cfsqltype="cf_sql_varchar"> <!--- using cf_sql_varchar assuming your id's are alphnumeric --->
        declare @aaid varchar(255) = <cfqueryparam value="#arguments.form.my_aa_user_id#" cfsqltype="cf_sql_varchar"> <!--- using cf_sql_varchar assuming your id's are alphnumeric --->

        insert into breakdown_submission(breakdown_id, breakdown_user_id, date_submitted, breakdown_submission_type_id, actor_access_user_id)
        values(@bdid, 0, #createodbcdatetime(now())#, @stid, @aaid)

        set @id = scope_identity(); <!--- This is a T-SQL command. Are you using T-SQL? --->

        update breakdown_submission_item
        set breakdown_submission_id = @id
        where breakdown_id = @bdid
        and breakdown_submission_id = 0
        and actor_access_user_id = @aaid
        <!--- I am making the assumption that tbl breakdown_submision_item has these column names.
        If not there would be a need for a JOIN statments of some type --->

        select @id as id;
     </cfquery>

     <cfreturn getid /> <!--- here we are returning the full query. It may be better to just return the value of getid.id --->
</cffunction>