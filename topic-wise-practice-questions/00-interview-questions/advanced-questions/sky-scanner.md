## Sky Scanner

Similar to Sky-scanner, we have thousands of sites each site can be queried with an HTTP call and returns a JSON which have data, part of that data is an array of prices(SOURCE-DEST)

For example:

Site [www.aaaaa.com](http://www.aaaaa.com/) -> {data, data, data, data….. [(TLV->NYC:300), (ABC->CDE:400)] }

We would like a create a pipeline, that collects the data and provides the ability to get the latest price from all the sites, based on SOURCE->DEST, for example, given SOURCE:TLV DEST:NYC would return:

```
TLV->NYC (www.abcd.com) 100USD
TLV->NYC (www.aaaa.com) 200 USD
TLV->NYC (www.bbbb.com) 3000 USD
```

### Complications

1. Make it distributed
2. Make it highly available

---
