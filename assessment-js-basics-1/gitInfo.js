/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
console.log("\nPROBELM ONE");

let gitDefinition = "Git is a piece of software that lets you save/store changes in your code to a local or cloud based repository and is used for version control over."
console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log("\nPROBELM TWO");

let gitHubDefinition = "Github is a website that lets users upload/download git repositories that can be shared or accessed easily using URL directories.";
console.log(gitHubDefinition);

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
console.log("\nPROBELM THREE");

let gitInitDefinition = "'git init' is a git command that initializes an empty git repo.";
console.log(gitInitDefinition);

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
console.log("\nPROBELM FOUR");

let gitCloneDefinition = "'git clone' is a git command that is used to copy a git repo. This command takes in one argument: the URL or directory of the repo to be copied.";
console.log(gitCloneDefinition);
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
console.log("\nPROBELM FIVE");

let gitStatusDefinition = "'git status' is a git command that is used to show changes made to the project since last commit.";
console.log(gitStatusDefinition);

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
console.log("\nPROBELM SIX");

let gitAddDefinition = "'git add' is a git command that adds a file from the repo folder to be staged. This command takes in one argument: the file you want to be staged";
let gitAddCode = "'git add .' adds all files from repo folder to be staged";

console.log(gitAddDefinition);
console.log(gitAddCode);

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
console.log("\nPROBELM SEVEN");

let gitCommitDefinition = "'git commit' is a git command that applies changes that have been added to the staging area. You can use '-m message' to add a comment or message when using this command. Each commit is almost like a snapshot of your code, which can be referenced or reverted back to."
let gitCommitCode = "'git commit -m initial commit'"

console.log(gitCommitDefinition);
console.log(gitCommitCode);

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
console.log("\nPROBELM EIGHT");

let gitPushDefinition = "'git push' is a git command that uploads local repo data to your cloud based repo."
console.log(gitPushDefinition);