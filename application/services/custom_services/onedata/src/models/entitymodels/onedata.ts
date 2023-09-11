
export interface onedata 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   entitybind: { type: String, ref: 'twodata' }
}



