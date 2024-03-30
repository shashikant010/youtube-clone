#include <bits/stdc++.h>
using namespace std;
int main(){
        int n;
        cout<<"enter number of nodes :";
        cin>>n;
        vector<int> graphy[n];
        int m;
        cout<<"Enter number of edges : ";
        cin>>m;
        cout<<"Enter the nodes and their adjacent edges";
        for (int i = 0; i < m; i++)
        {
            int u,v;
            cin>>u>>v;
            graphy[u].push_back(v);
        }

        cout<<graphy[0][1];
        
return 0;
}