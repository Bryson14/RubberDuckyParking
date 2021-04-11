from rest_framework.exceptions import APIException
from rest_framework.permissions import BasePermission

class AuthenticatedPermission(BasePermission):
    # authenticated users
    message = "Authentication Required"

    def has_permission(self, request, view):
        if (hasattr(request, 'user') and request.user is not None and request.user.is_authenticated):
            return True
        return False

class HostPermission(AuthenticatedPermission):
    message = "You must be a host"

    def has_permission(self, request, view):
        if not super().has_permission(request, view):
            return False
        return request.user.is_host()

class AttendantPermission(AuthenticatedPermission):
    message = "You must be an attendant or host"

    def has_permission(self, request, view):
        if not super().has_permission(request, view):
            return False
        return request.user.is_host() or request.user.is_attendant()

