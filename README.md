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

`ScreenShot`

![Login](https://user-images.githubusercontent.com/62432904/123126373-f4939f00-d466-11eb-8380-cc8c3d237aa2.jpg)

![SignUp](https://user-images.githubusercontent.com/62432904/123126394-f9585300-d466-11eb-853f-8d6771b12bf8.jpg)

![Otp](https://user-images.githubusercontent.com/62432904/123126406-fcebda00-d466-11eb-807d-94fb72bceeae.jpg)

![HomeScreen](https://user-images.githubusercontent.com/62432904/123126438-02e1bb00-d467-11eb-85fe-24102b3c71ba.jpg)

![albumDetails_Screen](https://user-images.githubusercontent.com/62432904/123126473-0a08c900-d467-11eb-9ff6-4a426eba39a4.jpg)

![ArtistDetails_Screen](https://user-images.githubusercontent.com/62432904/123126484-0bd28c80-d467-11eb-8623-ce2e30b15fa7.jpg)

![songPlayer](https://user-images.githubusercontent.com/62432904/123126498-0ecd7d00-d467-11eb-8e5e-eddd6131b2e2.jpg)

![Favourite_Screen](https://user-images.githubusercontent.com/62432904/123126549-1856e500-d467-11eb-842b-73e33352d35c.jpg)

![Profile_Screen](https://user-images.githubusercontent.com/62432904/123126704-3ae8fe00-d467-11eb-990d-119dfbc7cc9f.jpg)
