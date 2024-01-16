terraform {
  required_providers {
    launchdarkly = {
      source  = "launchdarkly/launchdarkly"
      version = "2.17.0"
    }
  }
  required_version = ">= 0.13"

}

provider "launchdarkly" {
  access_token = var.access_token

}

variable "ldProjects" {
  type    = set(string)
  default = ["project-1", "project-2"]
}

resource "launchdarkly_project" "Projects" {
  for_each = var.ldProjects
  name     = each.value
  key      = each.value


  tags = [
    "terraform-managed", "mfe-demo"
  ]

  environments {
    name = "Development"
    key  = "development"

    color = "000000"
    tags  = ["terraform-managed", "mfe-demo", "env-development"]
  }
}


data "launchdarkly_project" "ldProjects" {
  depends_on = [launchdarkly_project.Projects]
  for_each   = launchdarkly_project.Projects
  key        = each.value.key
}
resource "launchdarkly_feature_flag" "simpleToggleFlag" {
  for_each    = data.launchdarkly_project.ldProjects
  project_key = each.value.key
  name        = "Simple Toggle"
  key         = "simple-toggle"

  description    = "Toggle flag status on page components"
  variation_type = "boolean"

  variations {
    value = true
    name  = "Enable page component"
  }
  variations {
    value = false
    name  = "Disable page component"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  tags = ["terraform-managed", "mfe-demo", "flag-development"]

  temporary = true
  client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }
}


resource "launchdarkly_feature_flag" "enableMessage" {
  for_each    = data.launchdarkly_project.ldProjects
  project_key = each.value.key
  name        = "Enable Mesage"
  key         = "enable-message"

  description    = "Toggle display message in body component"
  variation_type = "boolean"

  variations {
    value = true
    name  = "Display message"
  }
  variations {
    value = false
    name  = "Hide message"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  tags = ["terraform-managed", "mfe-demo", "flag-development"]

  temporary = true
  client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }
}


resource "launchdarkly_feature_flag" "enableNewHeader" {
  for_each    = data.launchdarkly_project.ldProjects
  project_key = each.value.key
  name        = "Enable New Header"
  key         = "enable-new-header"

  description    = "Toggle new header component"
  variation_type = "boolean"

  variations {
    value = true
    name  = "Display new header"
  }
  variations {
    value = false
    name  = "Hide new header"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  tags = ["terraform-managed", "mfe-demo", "flag-development"]

  temporary = true
  client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }
}
