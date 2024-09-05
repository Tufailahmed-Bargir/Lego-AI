# Lego : legacy code converter

#### An interactive web portal to convert the legacy code (outdated code ) into modern code
![Screenshot 2024-09-02 223534](https://github.com/user-attachments/assets/61f4e488-f134-40a8-b0cf-80e2b170a00a)


## The interface to input the legacy code langauge, legacy code and modern code language

![Screenshot 2024-09-01 161347](https://github.com/user-attachments/assets/14dbcc5f-92c4-40a4-9022-f24285bb8002)


## Successfully converted code with documenation

![image](https://github.com/user-attachments/assets/98b1b960-eec0-4552-a5cf-eda52a68b2a6)


## Tech Stack Used

- Front End - **Nextjs**, **tailwindCSS**
- Back End - **Nextjs**,
- LLM Model- **Gemini 1.5 flash**

## How to run?
### Manual setup
1. Fork this repo and make a clone of it and go to the **cd lego** directory
   ```
   cd lego
   ```
3. make **pnpm install**
4. ```
   pnpm install
   ```
5. Create a **.env** file and paste your Gemini api key in .env file in **GEMINI_API_KEY='AIxxxxxxxxxxxxxxxxxxxxxxxxxxxx'**
6. Run/ Start localhost by (`pnpm run dev`)
```
pnpm run dev
```
7. then visit to **`localhost:3000`** in your browser.

### Docker setup
1) Build the image using  **Docker build -t (image-name) :(tag).**
   
**Example** 
```
Docker build -t lego:v1
```
3) and run the image using **Docker run -p 3000:3000 <image-name>**

   **Example** 
```
Docker run -p 3000:3000 lego:v1
```
## Want to Contribute?

contributions are always welcomed.

## Need help?

```javascript
if (needHelp === true) {
  var emailId = "bargirtufailahmed@gmail.com";
  // email is the best way to reach out to me.
  sendEmail(emailId);
}
```
