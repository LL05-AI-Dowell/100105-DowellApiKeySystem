from utils.constant import *
from utils.helper import *
import datetime
import json

"""SAVE SERVICES"""
def save_service(service_id,name,description,link,credits,service_type,sub_service):
    field = {
        "service_id": service_id,
        "name": name,
        "description": description,
        "link": link,
        "credits": credits,
        "service_type": service_type,
        "is_active": False,
        "is_released": True,
        "sub_service": sub_service,
        "created_at": datetime.datetime.now().strftime('%Y-%m-%d')
    }
    fetch_field = {
        "ids": service_id,
        "name": name
    }
    update_field = {
        "status": "Nothing to udpate"
    }
    responses = json.loads(dowellconnection(*Services,"fetch",fetch_field,update_field))
    for item in responses.get('data', []):
        if item['service_id'] == service_id and item['name'] == name:
            return False
    response = json.loads(dowellconnection(*Services,"insert", field , update_field))
    if response["isSuccess"]:
        return True
    else:
        return False

"""GET SERVICE"""
def get_service(field,update_field):
    response = json.loads(dowellconnection(*Services,"find",field,update_field))
    if not response["data"] == None:
        return {
            "success": True,
            "message": "Service details",
            "data": response['data']
        }
    else: 
        return {
            "success": False,
            "message": "Service is not found"
        }

"""GET ALL SERVICES"""
def get_all_services(field,update_field):
    response = json.loads(dowellconnection(*Services,"fetch",field,update_field))
    if not response["data"] == None:
        return {
            "success": True,
            "message": "List of all Services",
            "data": response['data']
        }
    else: 
        return {
            "success": False,
            "message": "Service is not found"
        }

"""SAVE VOUCHER"""
def save_voucher(name,description,code,discount):
    field = {
        "name": name,
        "description": description,
        "code": code,
        "discount": discount,
        "is_active": True,
        "created_at": datetime.datetime.now().strftime('%Y-%m-%d')
    }
    fetch_field = {
        "is_active": True
    }
    update_field = {
        "is_active": False
    }
    responses = json.loads(dowellconnection(*Voucher_Services,"fetch",fetch_field,update_field))
    for item in responses.get('data', []):
        if item['is_active'] == True :
            fields = {
                "_id": item["_id"]
            }
            responses = json.loads(dowellconnection(*Voucher_Services,"update",fetch_field,update_field))   
    
    response = json.loads(dowellconnection(*Voucher_Services,"insert", field , update_field))
    if response["isSuccess"]:
        return True
    else:
        return False

"""GET ALL ACTIVE VOUCHER"""    
def get_active_voucher(field,update_field):
    field = field
    update_field = update_field
    response = json.loads(dowellconnection(*Voucher_Services,"fetch", field, update_field))
    return response['data']

"""SAVE USER API KEY"""
def save_user_key(api_key, username, email, workspaceId, userDetails ):
    field = {
        "api_key": api_key,
        "username": username,
        "email": email,
        "workspaceId": workspaceId,
        "userDetails": userDetails,
        "is_active": False,
        "services": [],
        "is_paid": False,
        "total_credits": 1000,
        "disable_key": False,
        "created_at": datetime.datetime.now().strftime('%Y-%m-%d')
    }
    fetch_field = {
        "username": username,
        "email": email,
        "workspaceId": workspaceId
    }
    update_field = {
        "status": "Nothing to udpate"
    }
    responses = json.loads(dowellconnection(*User_Services,"fetch",fetch_field,update_field))
    for item in responses.get('data', []):
        if item['username'] == username and item['email'] == email and item['workspaceId'] == workspaceId:
            return {
                "success": False,
                "message": "User API key already exists",
                "data": responses["data"][0]
            }
    response = json.loads(dowellconnection(*User_Services,"insert", field , update_field))
    if response["isSuccess"]:
        return {
            "success": True,
            "message":"User API key created successfully",
            "data": field
        }
    else:
        return {
            "success": False,
            "message": "Something went wrong"
        }

"""GET VOUCHER DISCOUNT"""
def get_voucher_discount(code):
    field= {
        "code": code,
        "is_active": True
    }
    update_field= {
        "status": "Nothing to update"
    }
    response= json.loads(dowellconnection(*Voucher_Services,"find",field,update_field))
    if not response["data"] == None :
        return {
            "success": True,
            "message": "Voucher code was found successfully",
            "data": response["data"]["discount"]
        }
    else: 
        return {
            "success": False,
            "message": "Voucher code is either inactive or invalid"
        }

"""ACTIVATE USER API KEY"""
def activate_key(field,update_field):
    response= json.loads(dowellconnection(*User_Services,"find",field,update_field))
    if not response["data"] == None :
        if not response["data"]["is_active"]:
            response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
            return {
                "success": True,
                "message":"API key is activated successfully"
            }
        else:
            return {
                "success":False,
                "message": "API key already activated"
            }
    else:
        return {
            "success": False,
            "message": "API key not found"
        }

"""DEACTIVATE USER API KEY"""
def deactivate_key(field,update_field):
    response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
    return {
        "success":True,
        "message": "API key deactivated successfully"
    }

"""GET SERVICES TO ADD IN USER KEY"""
def get_services():
    field = {
        "is_released": True,
    }
    update_field = {
        "status": "Nothing to retrieve",
    }

    services_list = []

    service_response = json.loads(dowellconnection(*Services, "fetch", field, update_field))
    for service in service_response.get("data", []):
        service_data = {
            "name": service.get("name"),
            "service_id": service.get("service_id"),
            "service_type": service.get("service_type"),
            "is_active": service.get("is_active"),
            "credits": service.get("credits"),
            "sub_service": service.get("sub_service", None)
        }
        services_list.append(service_data)

    return services_list

"""ADD NEW SERVICES TO USER API KEY"""
def user_service_updation(field, update_field):
    response = json.loads(dowellconnection(*User_Services, "fetch", field, update_field))
    if not response["data"] == None:
        service = get_services()
        response_service_ids = {s["service_id"] for s in response["data"][0]["services"]}
        new_services = [s for s in service if s["service_id"] not in response_service_ids]

        updated_services = response["data"][0]["services"].copy()
        updated_services.extend(new_services)


        update_field = {
            "services": updated_services
        }
        response = json.loads(dowellconnection(*User_Services, "update", field, update_field))
        if response["isSuccess"]:
            return {
                "success": True,
                "message": "New services are added to existing users",
                "updated_services": updated_services
            }
        else:
            return {
                "success": False,
                "message": "Something went wrong"
            }
    else:
        return {
            "success": False,
            "message": "Something went wrong"
        }

"""ACTIVATE/DEACTIVATE USER SERVICE"""
def activate_deactivate_services(service_id, field):
    response = json.loads(dowellconnection(*User_Services, "find", field, update_field=None))
    if not response["data"] == None:
        if response["data"]["is_active"] == True and response["data"]["total_credits"] > 0:
            service_list = response["data"]["services"]
            for service in service_list:
                if service["service_id"] == service_id:
                    service["is_active"] = not service["is_active"]
                    break
            update_field = {
                "services": service_list
            }
            response = json.loads(dowellconnection(*User_Services, "update", field, update_field))
            if response["isSuccess"]:
                action = "activated" if service["is_active"] else "deactivated"
                return {
                    "success": True,
                    "message": f"{service_id} is {action}",
                }
            else:
                return {
                    "success": False,
                    "message": f"{service_id} failed to activate or deactivate"
                }
        else:
            return {
                "success": False,
                "message": "You have not activated the API key or you have less credits"
            }
    else:
        return {
            "success": False,
            "message": "API key not found"
        }
    
"""Get USER API KEY"""
def get_user_api_key(field, update_field):
    response = json.loads(dowellconnection(*User_Services, "find", field, update_field))
    if not response["data"] == None:
        return {
            "success": True,
            "message": "User API KEY details",
            "data": response["data"]
        }
    else:
        return {
            "success": False,
            "message": "API KEY details not found",
        }
    
"""PROCEE SERVICE BY USERS"""
def process_api_service_by_user(service_id, field, update_field):
    response = json.loads(dowellconnection(*User_Services, "find", field, update_field))
    data = response.get("data", {})
    if not data == None:
        is_active = data.get("is_active")
        disable_key = data.get("disable_key")
        total_credits = data.get("total_credits")
        

        services = data.get("services")

        if is_active is False:
            return {
                "success": False,
                "message": "API KEY is not activated",
            }
        elif disable_key is True:
            return {
                "success": False,
                "message": "YOUR API KEY IS DISABLED BY ADMIN.",
            }
        elif total_credits <= 0:
            return {
                "success": False,
                "message": "You have less credits. If you want to buy more credits click the 'Buy Credits' button",
                "link": "https://uxlivinglab.com/"
            }
        else:
            for service in services:
                if service.get("service_id") == service_id:
                    if service.get("is_active") is True:
                        total_credits = total_credits - service.get("credits")
                        update_field = {
                            "total_credits": total_credits
                        }
                        response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
                        return {
                            "success": True,
                            "message": "Credits was successfully consumed",
                            "total_credits": total_credits 
                        }
                    else:
                        return {
                            "success": False,
                            "message": "Service is not active"
                        }
            return {
                "success": False,
                "message": "Service not found"
            }
    else:
        return {
            "success": False,
            "message": "API key not found"
        }

"""PROCESS MODULE BY USERS"""    
def process_module_service_by_user(service_ids, module_id, field, update_field):
    response = json.loads(dowellconnection(*User_Services, "find", field, update_field))
    data = response.get("data", {})
    
    if data is not None:
        is_active = data.get("is_active")
        user_credits = data.get("total_credits")
        services = data.get("services")
        disable_key = data.get("disable_key")

        if is_active is False:
            return {
                "success": False,
                "message": "API KEY is not activated",
            }
        
        if disable_key is True :
            return {
                "success": False,
                "message": "YOUR API KEY IS DISABLED BY ADMIN.",
            }

        if user_credits <= 0:
            return {
                "success": False,
                "message": "You have less credits. If you want to buy more credits click the 'Buy Credits' button",
                "link": "https://uxlivinglab.com/"
            }

        module_active = False
        module_credits = 0
        module_found = False

        for service in services:
            if service.get("service_id") == module_id:
                module_active = service.get("is_active")
                module_credits = service.get("credits")
                module_found = True
                break

        if not module_found:
            return {
                "success": False,
                "message": "Module not found"
            }

        if module_active is True:
            total_credits = 0
            service_ids_found = []

            for service in services:
                if service.get("service_id") in service_ids:
                    service_ids_found.append(service.get("service_id"))
                    service["is_active"] = True

            if set(service_ids) != set(service_ids_found):
                return {
                    "success": False,
                    "message": "One or more service_ids not found in services"
                }

            total_credits += module_credits
            user_credits = user_credits - total_credits
            
            update_field = {
                "services": services,
                "total_credits": user_credits
            }
            response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
            return {
                "success": True,
                "message": "Consumed credits successfully",
                "total_credits": user_credits
            }
        else:
            return {
                "success": False,
                "message": "Module is not active"
            }
    else:
        return {
            "success": False,
            "message": "API key not found"
        }

"""PROCESS PRODUCT BY USERS"""   
def process_product_service_by_user(service_id, sub_service_ids, field, update_field):
    response = json.loads(dowellconnection(*User_Services, "find", field, update_field))
    data = response.get("data", {})
    
    if data is not None:
        is_active = data.get("is_active")
        user_credits = data.get("total_credits")
        services = data.get("services")
        disable_key = data.get("disable_key")

        if not is_active:
            return {
                "success": False,
                "message": "API KEY is not activated",
            }

        if disable_key:
            return {
                "success": False,
                "message": "YOUR API KEY IS DISABLED BY ADMIN.",
            }
        
        if user_credits <= 0:
            return {
                "success": False,
                "message": "You have less credits. If you want to buy more credits click the 'Buy Credits' button",
                "link": "https://uxlivinglab.com/"
            }

        product_active = False
        product_found = False
        sub_service = None

        for service in services:
            if service.get("service_id") == service_id:
                product_active = service.get("is_active")
                product_found = True
                sub_service = service.get("sub_service") 
                break
            
        if not product_found:
            return {
                "success": False,
                "message": "Product not found"
            }
        
        if product_active:
            if sub_service:  
                sub_service_info = []  
                total_credits_used = 0
                
                for sub_serv in sub_service:
                    sub_service_id = sub_serv.get("sub_service_id")
                    if sub_service_id in sub_service_ids:  
                        sub_service_credits = sub_serv.get("sub_service_credits")
                        quantity = sub_serv.get("quantity")
                        sub_service_name = sub_serv.get("sub_service_name")
                        if sub_service_credits is not None and quantity is not None:
                            sub_service_info.append({
                                "sub_service_name": sub_service_name,
                                "sub_service_id": sub_service_id,
                                "sub_service_credits": sub_service_credits,
                                "quantity": quantity
                            })
                            total_credits_used += sub_service_credits * quantity
                        else:
                            return {
                                "success": False,
                                "message": "Sub service information missing for sub_service_id: {}".format(sub_service_id),
                                "data": data
                            }
                
                if not sub_service_info:
                    return {
                        "success": False,
                        "message": "No valid sub_service_ids provided",
                    }
                
                remaining_credits = user_credits - total_credits_used
                update_field = {
                    "total_credits": remaining_credits
                }
                response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
                
                return {
                    "success": True,
                    "message": "Credits reduced successfully",
                    "sub_service_info": sub_service_info,
                    "remaining_credits": remaining_credits
                }
            else:
                return {
                    "success": False,
                    "message": "Sub service not found"
                }
        else:
            return {
                "success": False,
                "message": "Product is not active"
            }
    else:
        return {
            "success": False,
            "message": "Something went wrong"
        }

"""UPGRATE CREDITS BY USER"""
def upgrade_credits_by_user(total_credits, field):
    response = json.loads(dowellconnection(*User_Services,"find",field ,update_field=None))
    data = response.get("data", {})
    if data is not None:
        is_active = data.get("is_active")
        user_credits = data.get("total_credits")
        username = data.get("username")

        if is_active is False:
            return {
                "success": False,
                "message": "API KEY is not activated",
            }
        
        upadated_credits = user_credits + total_credits

        update_field = {
            "is_paid": True,
            "total_credits": upadated_credits 
        } 

        response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
        return {
            "success": True,
            "message": f"Credits for user {username} has been upgraded"
        }
    else:
        return {
            "success": False,
            "message": "API key not found"
        }

"""Restrict workspace service key access"""
def restrict_workspace(field):
    response = json.loads(dowellconnection(*User_Services, "find", field, update_field=None))
    data = response.get("data",{})

    if data is not None:
        disable_key = data["disable_key"]
        update_field = {
            "disable_key": not disable_key
        }
        response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
        if response["isSuccess"]:
            action = "Restriction is enabled" if not disable_key else "Restriction is disabled"
            return {
                "success": True,
                "message": f"{action}",
            }
        else:
            return {
                "success": False,
                "message": f"{field} failed to activate or deactivate"
            } 
    else:
        return {
            "success": False,
            "message": "WorkspaceId not found"
        }

"""GET ALL WORKSPACE DETAILS"""
def get_all_workspaces_details(field):
    response = json.loads(dowellconnection(*User_Services,"fetch",field,update_field=None))
    data = response.get("data",{})

    if data is not None:
        desired_data = []

        for item in data:
            active_services = []
            for service in item['services']:
                if service['is_active']:
                    active_services.append(service['name'])

            desired_item = {
                'api_key': item['api_key'],
                'workspaceId': item['workspaceId'],
                'username': item['username'],
                'is_active': item['is_active'],
                'is_paid': item['is_paid'],
                'total_credits': item['total_credits'],
                'created_at': item['created_at'],
                'disable_key': item['disable_key'],
                'active_services': active_services
            }

            desired_data.append(desired_item)
        return{
            "success": True,
            "message": "Workspace details",
            "data": desired_data
        }
    else:
        return {
            "success": False,
            "message": "Soemthing went wrong"
        }
    
"""CLAIM VOUCHER/COUPON"""
def claim_coupon(workspaceId,claim_method,description,timezone):
    voucher_details = generate_voucher_deatils(claim_method,3)
    field = {
        "name": voucher_details.get("name"),
        "voucher_worth": voucher_details.get("voucher_worth"),
        "workspaceId": workspaceId,
        "claim_method": claim_method, 
        "is_redeemed": False,
        "description": description,
        "is_verified": False,
        "created_at": dowell_time(timezone)["dowelltime"],
        "redemption_duration": voucher_details.get("time")
    }
    response = json.loads(dowellconnection(*Reedem_Voucher_Services,"insert",field,update_field=None))
    print(response)
    if response["isSuccess"]:
        return {
            "success": True,
            "message":"Voucher created successfully",
            "voucher_id": response.get("inserted_id")
        }
    else:
        return {
            "success": False,
            "message": "Something went wrong"
        }

"""REDEEM VOUCHER/COUPON"""
def redeem_coupon(id,timezone):
    field= {
        "_id":id,
    }
    response = json.loads(dowellconnection(*Reedem_Voucher_Services,"find",field,update_field=None))

    data = response.get("data",{})

    if data is not None :
        name = data.get("name")
        workspaceId = data.get("workspaceId")
        voucher_worth = data.get("voucher_worth")
        is_verified = data.get("is_verified")
        is_redeemed = data.get("is_redeemed")
        created_at = data.get("created_at")
        redemption_duration = data.get("redemption_duration")
        redemption_time = dowell_time(timezone)["dowelltime"]

        if is_redeemed:
            return {
                "success": False,
                "message": f"voucher name ,{name} is already redeemed"
            }
        
        if redemption_duration == 0 :
            update_field = {
                "is_verified": True,
                "is_redeemed":True
            }
            response = json.loads(dowellconnection(*Reedem_Voucher_Services,"update",field, update_field))
            field = {
                "workspaceId": workspaceId 
            }
            response = json.loads(dowellconnection(*User_Services,"find",field,update_field=None))
            data = response.get("data",{})
            if data is not None:
                total_credits = data.get("total_credits")
                total_credits = total_credits + voucher_worth
                update_field = {
                    "total_credits": total_credits
                }
                response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
                return {
                    "success": True,
                    "message": "Successfully voucher redeemed.",
                }
            else:
                return {
                    "success": False,
                    "message": "Workspace does not exist"
                }


        if not is_verified:
            return {
                "success": False,
                "message":"We are still processing your request"
            }

        redemption_time = redemption_time - created_at
        print("redemption_time",redemption_time)
        if redemption_time < redemption_duration:
            update_field = {
                "is_redeemed":True
            }
            response = json.loads(dowellconnection(*Reedem_Voucher_Services,"update",field, update_field))
            field = {
                "workspaceId": workspaceId 
            }
            response = json.loads(dowellconnection(*User_Services,"find",field,update_field=None))
            data = response.get("data",{})
            if data is not None:
                total_credits = data.get("total_credits")
                total_credits = total_credits + voucher_worth
                update_field = {
                    "total_credits": total_credits
                }
                response = json.loads(dowellconnection(*User_Services,"update",field,update_field))
            else:
                return {
                    "success": False,
                    "message": "Workspace not found with this workspaceId"
                }
            return {
                "success": True,
                "message": "Successfully voucher redeemed.",
            }
        else:
            return {
                "success": False,
                "message": "Voucher is expired"
            }
    else:
        return {
            "success": False,
            "message": "Something went wrong"
        }
    
"""VERFIY VOCUHER REDEMPTION"""
def verify_redemption(voucher_id):
    field = {
        "_id": voucher_id
    }
    update_field = {
        "is_verified": True,
    }
    response = json.loads(dowellconnection(*Reedem_Voucher_Services,"update", field,update_field))
    if response["isSuccess"]:
        return{
            "success": True,
            "message": "Voucher is successfully verified",
        }
    else:
        return {
            "success": False,
            "message": "No voucher or already verified"
        }

"""UNVERIFIED VOUCHER/COUPON"""
def unverified_coupon(field):
    response = json.loads(dowellconnection(*Reedem_Voucher_Services,"fetch", field,update_field=None))
    data = response.get("data",{})

    if data is not None :
        return {
            "success": True,
            "message": "List of unverified voucher",
            "data": data
        }
