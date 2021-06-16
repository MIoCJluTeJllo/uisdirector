from http.server import HTTPServer, BaseHTTPRequestHandler
from requests.structures import CaseInsensitiveDict
import requests
import json
from datetime import date

LOGIN='sfsf'
PASSWORD='qsuXrtf9Bkw4USGp'

class http_server:
    def __init__(self):
        data = {"login": LOGIN,"password":PASSWORD,"app_project":"uis2"}
        headers = CaseInsensitiveDict()
        headers["Content-Type"] = "application/json"
        response = requests.post('https://my.uiscom.ru/sup/auth/login', headers=headers, data=json.dumps(data))
        if response.ok:
            result = json.loads(response.content)
            myHandler.TOKEN  = result['data']['token']
            server = HTTPServer(('localhost', 8080), myHandler)
            print("Run a simple HTTP server")
            server.serve_forever()

class myHandler(BaseHTTPRequestHandler):
    TOKEN = ''
    def _set_headers(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def _get_headers(self):
        headers = CaseInsensitiveDict()
        headers["Authorization"] = "Bearer " + self.TOKEN
        headers["Content-Type"] = "application/json"
        return headers

    def do_GET(self):
        result = requests.get('https:' + self.path, headers=self._get_headers())
        if result.ok:
            self._set_headers()
            data = json.loads(result.content)["data"]
            self.wfile.write(json.dumps(data).encode())

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        date = json.loads(post_data)
        data = {"date_from":f"{date['start']}T00:00:00.000+05:00","date_till":f"{date['end']}T23:59:59.999+05:00","group_ids":None,"region_ids":[101,102,103,104,105,106,107,109,110,111,113,114,115,116,117,118,119,121,122,123,124,125,126,127,128,129,131,132,133,134,135,136,137,138,139,140,141,143,146,147,148,149,150,152,153,154,155,156,157,158,159,161,162,163,164,165,166,168,169,170,171,172,173,174,176,177,178,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,210,211,212,213,214,215,216,217,219,220,221,222,224,225,227,228,229,230,231,232,233,234,235,236,237,239,240,241,243,244,245,246,247,248,5422,5597,5598,87,88,89],"scenario_ids":[],"site_ac_ids":[],"virtual_numbers":[],"call_types":["external","internal"],"target_answer_duration":20,"columns":["employee_full_name","day","avg_status_497849_duration","avg_status_497855_duration","avg_status_497852_duration","avg_status_497858_duration","in_sum_talk_duration","out_sum_talk_duration","work_status_duration","available_duration","do_not_disturb_duration","break_duration","not_at_workplace_duration","auto_out_call_duration","employee_utilization","work_status_start_time","work_status_finish_time","call_count","in_call_count","out_call_count","sum_talk_duration","sum_answer_duration","in_sum_answer_duration","out_sum_answer_duration","in_avg_between_call_duration","out_avg_between_call_duration"],"target_in_talk_duration":0,"target_in_dialing_duration":0,"target_out_talk_duration":0,"target_out_dialing_duration":0}
        result = requests.post('https:' + self.path, headers=self._get_headers(), data=json.dumps(data))
        if result.ok:
            self._set_headers()
            data = json.loads(result.content)["data"]
            self.wfile.write(json.dumps(data).encode())

        
if __name__ == '__main__':
    server = http_server()
