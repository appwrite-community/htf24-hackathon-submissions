# Hackathon Submissions Platform Template

Here's a template repo for you to generate a submission platform for your hackathon for free on GitHub.

## Table Of Contents

- [Hackathon Submissions Platform Template](#hackathon-submissions-platform-template)
  * [Steps To Use This Repo](#steps-to-use-this-repo)
  * [Exporting Submission Links](#exporting-submission-links)
- [XYZ Hackathon: Example Hackathon Description](#xyz-hackathon-example-hackathon-description)
  * [About The Hackathon](#about-the-hackathon)
  * [Timeline](#timeline)
  * [Tracks](#tracks)
  * [Prizes](#prizes)
  * [Judging Parameters](#judging-parameters)
  * [How To Submit Your Project?](#how-to-submit-your-project)
    + [Video Tutorial - How To Submit Your Project?](video-tutorial---how-to-submit-your-project)
  * [Rules and Code of Conduct](#rules-and-code-of-conduct)

## Steps To Use This Repo 


* Click on [**Use this template**](https://github.com/adityaoberai/hackathon-submissions-repo-template/generate) to generate a copy of the repository for your hackathon.
<a href="https://github.com/adityaoberai/hackathon-submissions-repo-template/generate" target="_blank">
  <img width="94" alt="image" src="https://user-images.githubusercontent.com/31401437/170708931-be980535-a6fe-4540-a8d1-9515059f5d9c.png">
</a>

* Visit the [Issue Form for Hackathon Submissions](.github/ISSUE_TEMPLATE/submission.yaml) and edit it to your comfort. [*(Guide)*](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)

> *Note: In order to use the Hackathon Submissions Issue Form, your repository must be public.*

* Add new **Issue Labels** (and remove the existing ones) so that the list looks as follows. [*(Guide)*](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)
<img width="921" alt="image" src="https://user-images.githubusercontent.com/31401437/170709980-6b54a747-789c-41a5-9ed0-f398bbb767b9.png">

* Edit the **Example Hackathon Description** to add/update all the necessary details regarding your hackathon.

* Edit the [Code of Conduct](CODE_OF_CONDUCT.md) to add details of the organizers and the hackathon.

* Review (and update) the [Rules](RULES.md) to add your own set of rules for the hackathon.

* Remove the contents of the Readme before the hackathon description.

## Exporting Submission Links 

If you want export all submission links to a CSV file, follow the following steps:

* Install `Python 3.x` on your system.

* Create a folder to store your submissions CSV.

* Enter the folder, create a file `script.py` and add the following code:

```python
"""
Inspired by script the created by prateek032: https://gist.github.com/prateek032/06273e179bb034800c61
"""

import csv
import requests
import json

REPO = ""  # format is username/repo
ISSUES_FOR_REPO_URL = "https://api.github.com/repos/%s/issues" % REPO
arg = "?state=all"

# Since the hackathon repos must be public (to allow issue forms), username and password are not necessary.


def write_issues(r):
    "output a list of issues to csv"
    if not r.status_code == 200:
        raise Exception(r.status_code)
    for issue in r.json():
        Tag = []
        labels = issue["labels"]
        for label in labels:
            Tag.append(label["name"])

        if "issues" in issue["html_url"]:
            csvout.writerow(
                [
                    issue["number"],
                    issue["title"],
                    Tag,
                    issue["state"],
                    issue["created_at"],
                    issue["html_url"],
                ]
            )


r = requests.get(ISSUES_FOR_REPO_URL + arg)

csvfile = "%s-issues.csv" % (REPO.replace("/", "-"))
csvfileo = open(csvfile, "w")
csvout = csv.writer(csvfileo)
csvout.writerow(["Id", "Title", "Tag", "State", "Open Date", "URL"])

write_issues(r)

# more pages? examine the "link" header returned
if "link" in r.headers:
    pages = dict(
        [
            (rel[6:-1], url[url.index("<") + 1 : -1])
            for url, rel in [link.split(";") for link in r.headers["link"].split(",")]
        ]
    )

    while "last" in pages and "next" in pages:
        r = requests.get(pages["next"], auth=AUTH)
        write_issues(r)
        if pages["next"] == pages["last"]:
            break
        pages = dict(
            [
                (rel[6:-1], url[url.index("<") + 1 : -1])
                for url, rel in [
                    link.split(";") for link in r.headers["link"].split(",")
                ]
            ]
        )

csvfileo.close()
```

* Open your shell in the same folder and run the command `pip install requests` followed by `python script.py`.

* You should have a CSV file with all the submissions in your folder.

---

# XYZ Hackathon: Example Hackathon Description

## About The Hackathon

XYZ Hackathon is a 48-hour digital hackathon where young minds possessing a passion for solving real-life problems come together to build innovative solutions. Whether you are a beginner or an expert coder, here is the perfect chance to hone your skills and witness the competitive yet inclusive developer community around you!

Learn new technologies, enhance your team management and presentation skills, and get mentored by experts- all in one place!

## Timeline

* **Start Date and Time:** 1st January 2022 at 11:00 AM IST
* **Start Date and Time:** 3rd January 2022 at 11:00 AM IST

## Tracks

* Track 1

> Description of Track 1

* Track 2

> Description of Track 2

* Track 3

> Description of Track 3

* Track 4

> Description of Track 4

## Prizes

* **1st Prize**

>* Cash worth $500
>* XYZ Hackathon Swags


* **2nd Prize**

>* Cash worth $300
>* XYZ Hackathon Swags

* **3rd Prize**

>* Cash worth $100
>* XYZ Hackathon Swags

## Judging Parameters

1. Project Completeness and Functionality *(25%)*

> * Does the project stand as an individual end-to-end product?
> * Is it a functioning solution that can scale in the real world?

2. Creativity in Design *(25%)*

> * Does the project bring innovations in design and create comfortable user experiences?

3. Innovation in Idea *(25%)*

> * Does the project attempt to solve a previously unsolved problem?

4. Social Impact *(25%)*

> * Does the project have an impact on people's lives at a social level?

## How To Submit Your Project?

Follow the steps to submit your project in the hackathon:

* Visit the **Issues** tab in the respository and click on **New Issue**
<img width="939" alt="image" src="https://user-images.githubusercontent.com/31401437/170703361-5194ebb5-6938-4a25-abef-25ea4c60ae0b.png">

* Find the **Hackathon Submission** option and click on **Get Started** 
<img width="951" alt="image" src="https://user-images.githubusercontent.com/31401437/170703875-ec6a0737-f910-4734-9c5b-cb359d12ac91.png">

* **Enter your submission details and you're good to go!**

### Video Tutorial - How To Submit Your Project?

https://user-images.githubusercontent.com/31401437/170713948-5bfe0c35-e1aa-4eeb-8456-fbb02aeb9292.mp4

## Rules and Code of Conduct

All participants must agree to the [Rules](RULES.md) and [Code of Conduct](CODE_OF_CONDUCT.md) to participate in the Hackathon.

---
