import os


def settings(request):
	settings_body = request.get_json()["settings"]
	f = open(os.path.join(os.getcwd(), "video/settings.txt"), "w")
	settings_txt = str(settings_body["distance_or_no"]) + " " + str(settings_body["distance_val"]) + " " + str(settings_body["mask_or_no"])
	f.write(settings_txt)
	f.close
	return "Success\n"
