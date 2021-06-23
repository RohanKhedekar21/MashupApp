# MashupApp
Music Application

Step to Run project::::::

`Run on AWS`
1) create EC2 instance then add mongoDb collection into it and run project services on EC2 with PM2 library ( mongoDb dump is stored in project folder )
2) create buckets on S3 ( folder structure is stored in project folder enter same folder name on S3 )
3) copy public ip address of EC2 instance and add it into the project -> src -> envs -> development.js file for BASE_URL variable
(note: also check DATA_URL is same as on S3 bucket)
4) run project -> react-native run-android



`Run on Local Machine`
1) add mongoDb dump into mongoDB database ( mongoDB dump file stored in project folder)
2) create buckets on S3 ( folder structure is stored in project folder enter same folder name on S3 )
3) check DATA_URL is same as on S3 bucket
2) check BASE_URL is "http://localhost" or "http://your_current_ip_address"
(note: DATA_URL and BASE_URL location is "project -> src -> envs -> development.js" )
2) run project services
3) run project -> react-native run-android
