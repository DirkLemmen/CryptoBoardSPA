# Portfolio Semester 3

# Project

### Description
With this web application you are able to see the latest crypto market information. When an investor is authenticated he has the possibility to manage his portfolio to track his statistics.

This project is created with Spring Boot and React.

## C4 Models

### C2
In this C2 model you can see that the investor has access to the client. After that he has the possibility to check the market. If he wants to manage his own portfolio he needs to be authorized by the external login service ([Auth0](https://auth0.com/)).

[![C2.png](https://i.postimg.cc/c1zQgngn/C2.png)](https://postimg.cc/SjWXHjGS)
### C3
In this C3 model you can see which services the client uses and what the API's make use of.

[![C3.png](https://i.postimg.cc/NfrR1jmP/C3.png)](https://postimg.cc/tYp1byrh)
# Learning outcomes
The learning outcomes I need to accomplish this Semester

## Design and build user-friendly, full-stack web applications.
### Coin service
This service shows coins from coin-service API that retrieves data from external API and caches it.
<table>
  <tr>
    <td><image src="https://i.postimg.cc/7hCSPRqd/endpoint-coins.jpg" height=250/></td>
    <td><image src="https://i.postimg.cc/85qtmZ6M/Home.jpg" height=250 width=450/></td>
  </tr>
  </table>
  
### Identity service with OAuth2
This service makes it possible for users to login and register to the website. I used Auth0 as authentication and authorization platform.
When calling a private service a JWT token is needed to obtain access to an endpoint.

[![auth0.jpg](https://i.postimg.cc/C5wbKw4d/auth0.jpg)](https://postimg.cc/mz6PXfJG)

* [Auth0](https://auth0.com/)
* [JWT tokens](https://www.youtube.com/watch?v=soGRyl9ztjI)

## Software tooling and methodology that continuously monitors and improve the software quality during software development.
For this learning outcome I created unit & integrations tests. These tests will approve the behavior of the code, and prevent bugs. On the images below some unit and integration tests are shown.

[![testingpyramid.png](https://i.postimg.cc/vmSbhhLb/testingpyramid.png)](https://postimg.cc/XZFR7wzz)

### Unit testing
Unit testing is used to test individual units or components of the software. I created multiple unit tests for every method I created to test success situations but also test exceptions. I mocked objects with Mockito to simulate real object behavior. This is useful because the use of real objects is impractical in testing.

[![unittests.png](https://i.postimg.cc/BvT0GN4T/unittests.png)](https://postimg.cc/SXx566XR)

Sources:
* [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)
* [Amigoscode](https://www.youtube.com/watch?v=Geq60OVyBPg&t=4141s)

### Integration testing
Integration testing is used to test the combining of software modules. Integration testing is done after unit testing. In this case this is done with MockMvc, this allows you to create fake requests to a controller. This way the controller behavior can be tested. In the integration tests the statuscode and JSON response is tested

[![integrationtests.png](https://i.postimg.cc/d1nch17D/integrationtests.png)](https://postimg.cc/njsP5nGt)
### H2 Database
A H2 database is an in-memory database I used for testing. Benefits of using this database is that I'm not making changes in the real database. this way tests are faster and I'm not messing with real data.

### Automated testing
Tests are run automatically everytime there has been pushed to the branch-develop. 

### Code coverage
I use [Sonarcloud](https://sonarcloud.io/) for code coverage. With this tool I enhance my workflow with continous code quality. Sonarcloud analyzes my code every push to develop. 

[![sonarcloud.png](https://i.postimg.cc/1tpqsJ5x/sonarcloud.png)](https://postimg.cc/jwS5h67v)

## Automated software release process

### CI/CD Pipeline

### Travis CI
## NOTE: Free plan expired and switched to Github actions
I used [Travis CI](https://travis-ci.org/) as CI tool. Travis is highly flexible and can be configured how you like.
[![travis.jpg](https://i.postimg.cc/L5NW7pfc/travis.jpg)](https://postimg.cc/CnnJB9c7)

1. Run a code check with [Sonarcloud](https://sonarcloud.io/). This tool checks my code for any vulnerabilities. If there are any errors the commit should be fixed first before working on something different.

2. When the code review is finished build a java package with ```mvn clean package```

3. Build Docker container and upload to [Docker Hub](https://hub.docker.com/)

### Github actions
I created two different workflows. The <code>Build</code> workflow is triggered on commit to the develop branch. This workflow runs automated tests and builds a .JAR file. The <code>Production</code> workflow pushes a docker image to [Docker Hub](https://hub.docker.com/).
[![githubactions.png](https://i.postimg.cc/xCJbYt01/githubactions.png)](https://postimg.cc/Q9DMJg92)
### DockerFile
```
FROM openjdk:<JAVA_VERSION>-jdk-alpine
ADD target/<PROJECT_NAME>.jar <PROJECT_NAME>.jar
EXPOSE <PORT>
ENTRYPOINT ["java", "-jar", "<PROJECT_NAME>"]
```

### Docker repositories
* [Coin-service](https://hub.docker.com/repository/docker/dirkl1/cryptoboard-coin-service)
* [Portfolio-service](https://hub.docker.com/repository/docker/dirkl1/cryptoboard-portfolio-service)

## Act in a professional manner during software development and learning

### Project board
All the features created as issues are visible for me and new contributors. This way everyone can keep track and it is clear where the project is standing. Every feature has some criteria to show what has to be done to complete the feature. Some issues have a pull request linked, this way contributors can see which changes are made for that issue.

[![projectboard.png](https://i.postimg.cc/mZpP0Q35/projectboard.png)](https://postimg.cc/kD8MSRpQ)

### Contribution to open source
On the image below you can see that I updated a README file in an open source project. I started by creating an issue describing the problem. Next I changed the README file and created a pull request. The same day my contribution was merged in to the project.
[![opensource-example.png](https://i.postimg.cc/qgf1Dv8L/opensource-example.png)](https://postimg.cc/q6Lcz0Dh)


# Linked repositories
*  [coin-service](https://github.com/DirkLemmen/cryptoboard-coin-service)
*  [portfolio-service](https://github.com/DirkLemmen/cryptoboard-portfolio-service)
*  [SPA](https://github.com/DirkLemmen/CryptoBoardSPA)
