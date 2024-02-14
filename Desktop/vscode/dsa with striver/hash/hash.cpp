#include <iostream>
using namespace std;
int main(){
int n;
cout<<"enter the number of digit in the array you want to search ";
cin>>n;
int arr[n];
for (int i = 0; i < n; i++)
{
cin>>arr[i];
}

int hash[13]={0};
for (int i = 0; i < 13; i++)
{
    cout<<hash[i]<<" ";
}
cout<<endl;
for (int i = 0; i < n; i++)
{
    hash[arr[i]]+=1;
}

for (int i = 0; i < 13; i++)
{
    cout<<hash[i]<<" ";
}




return 0;
}