#include <bits/stdc++.h>
using namespace std;

int main() {
    unordered_map<string, string> mp;
    mp["Paris"] = "Skopje";
    mp["Zurich"] = "Amsterdam";
    mp["Prague"] = "Zurich";
    mp["Barcelona"] = "Berlin";
    mp["Kiev"] = "Prague";
    mp["Skopje"] = "Paris";
    mp["Amsterdam"] = "Barcelona";
    mp["Berlin"] = "Kiev";
    mp["Berlin"] = "Amsterdam";

    unordered_set<string> chk;
    string start = "Kiev";
    string route = start;
    string current = mp[start];
    
    chk.insert(start);

    while (chk.find(current) == chk.end()) {
        route += "->" + current;
        chk.insert(current);
        current = mp[current];
    }

    route += "->" + start;
    cout << route << endl;

    return 0;
}