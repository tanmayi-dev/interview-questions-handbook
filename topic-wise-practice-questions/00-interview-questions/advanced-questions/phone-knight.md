# Phone Knight <a id="a2"></a>

Write a program that prints all available routes on a phone keypad while moving with the following constraints

```
1 2 3
4 5 6
7 8 9
* 0 #
```

1. move like a knight from chess
2. no "\*" / "#" allowed in the phone stream
3. can't start from zero

### Solution

```python
#!/usr/bin/python3
 
def get_routes_inner(node, graph, route_size, memos):
    if route_size <= 0:
        return [[node]]
 
    res = []
    for n in graph[node]:
        route_key = (n, route_size -1)
        if route_key in memos.keys():
            res += memos[route_key]
        else:
            res += get_routes_inner(n, graph, route_size - 1, memos)
 
    for route in res:
        route.insert(0, node)
 
    memos[(node, route_size)] = [res]
    return res
 
def get_routes(graph):
    res = {}
    memos = {}
    for n in graph:
        if n != "0":
            res[n] = get_routes_inner(n, graph, 1, memos)
 
    return res
 
 
knight_movements = {}
knight_movements["1"] = ["8", "6"]
knight_movements["2"] = ["7", "9"]
knight_movements["3"] = ["8", "4"]
knight_movements["4"] = ["3", "9", "0"]
knight_movements["5"] = []
knight_movements["6"] = ["0", "1", "7"]
knight_movements["7"] = ["6", "2"]
knight_movements["8"] = ["1", "3"]
knight_movements["9"] = ["2", "4"]
knight_movements["0"] = ["4", "6"]
 
res = get_routes(knight_movements)
 
print(res)
```

```cpp
// CPP

#include <iostream>
#include <vector>
#include <unordered_map>
 
std::vector<std::string> find_route(
    const std::string & initial_node,
    const std::unordered_map<std::string, std::vector<std::string>> & graph,
    std::size_t route_size)
{
    std::vector<std::string> res;
    res.emplace_back(initial_node);
    for (const auto & node : graph.at(initial_node)) {
        res.emplace_back(find_all_routes(node, graph, ++route_size));
    }
}
 
std::vector<std::vector<std::string>> find_all_routes(
    const std::string & initial_node,
    const std::unordered_map<std::string, std::vector<std::string>> & graph,
    std::size_t route_size)
{
    if (route_size == 10) {
        return {};
    }
 
    std::vector<std::vector<std::string>> res;
    for (const auto & node : graph.at(initial_node)) {
        res.emplace_back(find_all_routes(node, graph, ++route_size));
    }
 
    return res;
}
 
std::unordered_map<std::string, std::vector<std::vector<std::string>>> find_all_routes(const std::unordered_map<std::string, std::vector<std::string>> & graph)
{
    std::unordered_map<std::string, std::vector<std::vector<std::string>>> res;
    for(const auto & [key, _] : graph) {
        if (key != "0") {
            res[key] = find_all_routes(key, graph, 0);
        }
    }
 
    return res;
}
 
int main()
{
    std::unordered_map<std::string, std::vector<std::string>> knight_movements;
    knight_movements[std::string("1")] = std::vector<std::string>({std::string("8"), std::string("6")});
    knight_movements[std::string("2")] = {std::string("7"), std::string("9")};
    knight_movements[std::string("3")] = {std::string("8"), std::string("4")};
    knight_movements[std::string("4")] = {std::string("3"), std::string("9"), std::string("0")};
    knight_movements[std::string("5")] = {};
    knight_movements[std::string("6")] = {std::string("0"), std::string("1"), std::string("7")};
    knight_movements[std::string("7")] = {std::string("6"), std::string("2")};
    knight_movements[std::string("8")] = {std::string("1"), std::string("3")};
    knight_movements[std::string("9")] = {std::string("2"), std::string("4")};
    knight_movements[std::string("0")] = {std::string("4"), std::string("6")};
 
    for(const auto & [key, routes]: find_all_routes(knight_movements)) {
        std::cout << key << std::endl;
        for (const auto route: routes) {
            std::cout << "route:" << std::endl;
            for (const auto node: route) {
                std::cout <<  node << ",";
            }
            std::cout << "end of route" << std::endl;
        }
        std::cout << "end of " << key << std::endl;
    }
    return 0;
}
```
