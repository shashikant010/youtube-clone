#include <bits/stdc++.h>
using namespace std;
int main(){

    int n;
    cout<<"Enter the number of nodes: ";
    cin>>n;
    int m;
    cout<<"Enter the number of Edges: ";
    cin>>m;
    int graphy[n][n]={0};
    cout<<"Write the edges";
    for (int i = 0; i < m; i++)
    {
        int u,v;
        cin>>u>>v;
        graphy[u][v]=1;
    }
    cout<<"enter the vertex you want to check ";
    int u,v;
    cin>>u>>v;
    cout<<graphy[u][v];

return 0;
}